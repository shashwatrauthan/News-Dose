import React, { Component } from 'react'
import NewsItemComp from './NewsItemComp'
import { Spinner } from 'react-bootstrap'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


export class NewsComp extends Component {

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    static defaultProps = {
        country: "in",
        pageSize: 20,
        category: "general"
    }

    constructor(props) {
        super(props);
        this.state = { articles: [], total_results: null, page: 1, max_pages: null, loading: false };
        document.title = `News Dose - ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}`;
    }



    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
        
        let url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.category}/${this.props.country}.json`;

        this.props.setProgress(10);
        this.props.setProgress(20);
        let articles_response = await fetch(url);
        this.props.setProgress(40);
        let articles_json = await articles_response.json();
        this.props.setProgress(60);
        this.setState({ articles: articles_json.articles });
        this.setState({ total_results: articles_json.totalResults });
        this.props.setProgress(80);
        this.setState({ max_pages: Math.ceil(this.state.total_results / this.props.pageSize) });
        this.props.setProgress(100);
    }

    
    fetchData = async()=> {
        let page_no = this.state.page+1;
        this.setState({ page: page_no });
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&page=${page_no}&pageSize=${this.props.pageSize}&category=${this.props.category}`;

        let url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.category}/${this.props.country}.json`;

        let articles_response = await fetch(url);
        let articles_json = await articles_response.json();
        this.setState({ articles: this.state.articles.concat(articles_json.articles) });
    }

    render() {

        return (
            <>
                <div className='container my-4'>
                    <h2>News Dose - Top Headlines ({this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)})</h2>

                    <InfiniteScroll className="container"
                        dataLength={this.state.articles.length}
                        next={this.fetchData}

                        // hasMore={this.state.page !== this.state.max_pages}
                        hasMore={false}
                        
                        loader={<Spinner className="mx-auto d-flex justify-content-center align-items-center" style={{ margin: "8rem" }} animation="border" variant="dark" />}
                        endMessage={
                            <p className="my-4" style={{ textAlign: 'center' }}>
                                <b>Yay! You have seen it all.</b>
                            </p>
                        }>

                        <div className="row px-2">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-3 my-3" key={element.url}>
                                    <NewsItemComp title={element.title} description={element.description} img={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} />
                                </div>
                            })}
                        </div>
                    </InfiniteScroll>
                </div>

            </>
        )
    }
}

export default NewsComp