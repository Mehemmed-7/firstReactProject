import React, { Component } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'


class Card extends Component {
    render() {
        const{cardImage, cardTitle} = this.props;
        return (
            <div>
                <div className="service_card d-flex flex-column justify-content-between">
                    <div className="card_header">
                        <img src={cardImage} alt=""/>
                    </div>
                    <div className="card_body d-flex flex-column justify-content-evenly">
                        <p className="card_title">{cardTitle}</p>
                        <button className="d-flex justify-content-between align-items-center">Explore page <FontAwesomeIcon icon={faArrowRight}/></button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Card