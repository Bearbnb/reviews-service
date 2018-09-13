import React from 'react';
import ReactDOM from 'react-dom';
import Review from './Review.jsx';
import styles from '../../styles/ReviewList.css';

class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewlist: [],
            pages: Array.from({ length: Math.ceil(props.reviews.length / 5) }, (x, i) => i)
        };
    }
    componentDidMount(){
        this.setState({
            reviewlist: this.props.reviews.slice(0, 5)
        })
    }
    handleClick(page){
        const end = page*5;
        const start = end-5;
        this.setState({
            reviewlist: this.props.reviews.slice(start, end)
        })
    }

    render(){
        
        return (
            <div className={styles.reviewlist}>
                <div className = {styles.reviewlist}>
                { this.state.reviewlist.map(review =>
                    <Review review={review}/>
                )} 
                </div>
            <div>
                <div className = {styles.buttonContainer}>
                    <button >{'<'}</button>
                    { this.state.pages.map(button => 
                    <button onClick = {()=>this.handleClick(button+1)}>{button+1}</button>
                    )}
                    <button >{'>'}</button>
                </div>
            </div>
            </div> 
                
        );
    }  
}

export default ReviewList;