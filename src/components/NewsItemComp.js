import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'


export class NewsItemComp extends Component {
    render() {
        let {title, description, img, url, author, date} = this.props;
        return (
            <>
                <Card style={{height: '32rem'}}>
                    <Card.Img variant="top" src={img? img:"https://thumbs.dreamstime.com/z/news-26983471.jpg"} alt="News Image" style={{height: "10rem"}}/>
                    <Card.Body>
                        <Card.Title>{title.length>125? description.slice(0,125)+"...":title}</Card.Title>
                        <Card.Text>
                            {description? description.slice(0,150)+"...":" "}
                        </Card.Text>
                        <small className="text-muted moreInfo">By {author?author:"unknown"} on {new Date(date).toLocaleDateString()}</small>
                        <Button href={url} className="btn_link" target="_blank" variant="primary">Read More</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default NewsItemComp