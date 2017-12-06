import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl, Checkbox, Table, Collapse } from 'react-bootstrap';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//
// import { isLoggedIn, newContentPostToProps } from '../actions';
////

//===============================================================================================//

class NewContentPostMediums extends Component {
    constructor() {
        super();
        this.state = {
            contentMedium: '',
            yt_UploadFrequency: 0,
            yt_VideoLength: 0,
            yt_SubCount: '',
            yt_ViewCount: 0
        }
    }


    // handleChange(event) {
    //     switch (event.target.name) {
    //         case 'contentMedium': {
    //             return this.setState({contentMedium: event.target.value});
    //         }
    //
    //         case 'contentSummary': {
    //             return this.setState({contentSummary: event.target.value});
    //         }
    //
    //         case 'contentDescription': {
    //             return this.setState({contentDescription: event.target.value});
    //         }
    //
    //         case 'contentIdealMatch': {
    //             return this.setState({contentIdealMatch: event.target.value});
    //         }
    //
    //         case 'yt_UploadFrequency': {
    //             return this.setState({yt_UploadFrequency: event.target.value});
    //         }
    //
    //         case 'yt_VideoLength': {
    //             return this.setState({yt_VideoLength: event.target.value});
    //         }
    //
    //         case 'yt_SubCount': {
    //             return this.setState({yt_SubCount: event.target.value});
    //         }
    //
    //         case 'yt_ViewCount': {
    //             return this.setState({yt_ViewCount: event.target.value});
    //         }
    //
    //         default: {
    //             alert('ERROR: input not recognized');
    //         }
    //     }
    // }


    // onReviewNewContentPost() {
    //     // validation for later. Check that all contentX fields and one entry are filled in.
    //     if (!this.state.contentSummary || !this.state.contentDescription || !this.state.contentMedium) {
    //         return alert('Error: Please make sure to enter a headline, description, and category before proceeding');
    //     }
    //
    //
    //     (async () => {
    //         try {
    //             this.props.dispatch(newContentPostToProps({
    //                 contentMedium: this.state.contentMedium,
    //                 contentSummary: this.state.contentSummary,
    //                 contentDescription: this.state.contentDescription,
    //                 contentIdealMatch: this.state.contentIdealMatch,
    //                 yt_UploadFrequency: this.state.yt_UploadFrequency,
    //                 yt_VideoLength: this.state.yt_VideoLength,
    //                 yt_SubCount: this.state.yt_SubCount,
    //                 yt_ViewCount: this.state.yt_ViewCount
    //
    //             }));
    //             return await this.setState({redirectToReviewNewContentPost: true});
    //
    //         } catch (err) {
    //             return alert('Error: Something went wrong. Please try again or notify us if the issue persists.');
    //         }
    //     })();
    // }
    //


    render() {


        return (
            <div className="newContentPostContainer">


                <button>
                    <Link to="/newContentPost">
                        Back
                    </Link>
                </button>

                <FormGroup>
                    <ControlLabel>Medium(s)</ControlLabel>
                    <FormControl
                        componentClass="select"
                        name="contentMedium"
                        onChange={this.handleChange}
                        value={this.state.contentMedium}>
                        <option value="">-</option>
                        <option value="YouTube">YouTube</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Twitter">Twitter</option>
                        <option value="Snapchat">Snapchat</option>
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Upload frequency</ControlLabel>
                    <FormControl
                        componentClass="select"
                        name="yt_UploadFrequency"
                        onChange={this.handleChange}
                        value={this.state.yt_UploadFrequency}
                        placeholder="select">
                        <option value="">-</option>
                        <option value="0-1 videos/month">0-1 videos/month</option>
                        <option value="2-3 videos/month">2-3 videos/month</option>
                        <option value="4-5 videos/month">4-5 videos/month</option>
                        <option value="6-7 videos/month">6-7 videos/month</option>
                        <option value="8-9 videos/month">8-9 videos/month</option>
                        <option value="10+ videos/month">10+ videos/month</option>
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Typical video length</ControlLabel>
                    <FormControl
                        componentClass="select"
                        name="yt_VideoLength"
                        onChange={this.handleChange}
                        value={this.state.yt_VideoLength}
                        placeholder="select">
                        <option value="">-</option>
                        <option value="Under 2 minutes">Under 2 minutes</option>
                        <option value="Between 2 and 5 minutes">Between 2 and 5 minutes</option>
                        <option value="Between 5 and 10 minutes">Between 5 and 10 minutes</option>
                        <option value="10+ minutes">10+ minutes</option>
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Subscriber count</ControlLabel>
                    <FormControl
                        componentClass="select"
                        name="yt_SubCount"
                        onChange={this.handleChange}
                        value={this.state.yt_SubCount}
                        placeholder="select">
                        <option value="">-</option>
                        <option value="Under 5,000 users">Under 5,000 users</option>
                        <option value="Between 5,000 and 10,000 users">Between 5,000 and 10,000 users</option>
                        <option value="Between 10,000 and 20,000 users">Between 10,000 and 20,000 users</option>
                        <option value="Between 20,000 and 30,000 users">Between 20,000 and 30,000 users</option>
                        <option value="Between 30,000 and 40,000 users">Between 30,000 and 40,000 users</option>
                        <option value="Between 40,000 and 50,000 users">Between 40,000 and 50,000 users</option>
                        <option value="Between 50,000 and 60,000 users">Between 50,000 and 60,000 users</option>
                        <option value="Between 60,000 and 70,000 users">Between 60,000 and 70,000 users</option>
                        <option value="Between 70,000 and 80,000 users">Between 70,000 and 80,000 users</option>
                        <option value="Between 80,000 and 90,000 users">Between 80,000 and 90,000 users</option>
                        <option value="Between 90,000 and 100,00 users">Between 90,000 and 100,000 users</option>
                        <option value="1,000,000+ users">1,000,000+ users</option>
                    </FormControl>
                    <FormGroup>
                        <ControlLabel>Total channel views</ControlLabel>
                        <FormControl
                            componentClass="select"
                            name="yt_ViewCount"
                            onChange={this.handleChange}
                            value={this.state.yt_ViewCount}
                            placeholder="select">
                            <option value="">-</option>
                            <option value="Under 5,000 views">Under 5,000 views</option>
                            <option value="Between 5,000 and 10,000 views">Between 5,000 and 10,000 views</option>
                            <option value="Between 10,000 and 20,000 views">Between 10,000 and 20,000 views</option>
                            <option value="Between 20,000 and 30,000 views">Between 20,000 and 30,000 views</option>
                            <option value="Between 30,000 and 40,000 views">Between 30,000 and 40,000 views</option>
                            <option value="Between 40,000 and 50,000 views">Between 40,000 and 50,000 views</option>
                            <option value="Between 50,000 and 60,000 views">Between 50,000 and 60,000 views</option>
                            <option value="Between 60,000 and 70,000 views">Between 60,000 and 70,000 views</option>
                            <option value="Between 70,000 and 80,000 views">Between 70,000 and 80,000 views</option>
                            <option value="Between 80,000 and 90,000 views">Between 80,000 and 90,000 views</option>
                            <option value="Between 90,000 and 100,00 views">Between 90,000 and 100,000 views</option>
                            <option value="1,000,000+ views">1,000,000+ views</option>
                        </FormControl>
                    </FormGroup>
                </FormGroup>

            </div>
        )
    }
}

export default NewContentPostMediums;