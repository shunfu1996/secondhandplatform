import { Card, Container } from "react-bootstrap"
import { AiOutlineHeart } from "react-icons/ai"

export default function Recommend() {

    const cardData = [
        {
            user: "John Doe",
            date: "12/12/2020",
            content: "content1",
            price: "200",
            status: "New",
            like: "100"
        },
        {
            user: "Alex Doe",
            date: "12/12/2021",
            content: "content2",
            price: "300",
            status: "SecondHand",
            like: "50"
        },
        {
            user: "Jane Doe",
            date: "12/12/2022",
            content: "content3",
            price: "400",
            status: "New",
            like: "10"
        },
        {
            user: "John Doe",
            date: "12/12/2023",
            content: "content4",
            price: "500",
            status: "SecondHand",
            like: "100"
        },
    ]

    return (
        <div>
            <h1>為你推薦</h1>
            <div className="row">
                {cardData.map((item, index) => {
                    return (
                        <div className="col-md-3 eachCard" key={index}>
                            <Card>
                                <Card.Title>{item.user}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Text>{item.content}</Card.Text>
                                    <Card.Text>HK${item.price}</Card.Text>
                                    <small className="text-muted">{item.status}</small>
                                    <Card.Text>
                                        <br /><AiOutlineHeart />
                                        {item.like}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}