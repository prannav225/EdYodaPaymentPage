import React, { useState } from 'react';
import './styles/ContentContainer.css';
const ContentContanier = () => {
    const [selectedSubscription, setSelectedSubscription] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);

    // Function to handle subscription selection
    const handleSubscriptionChange = (event) => {
        setSelectedSubscription(event.target.value);
        setTotalAmount(calculateTotalAmount(event.target.value));
    };

    // Function to calculate total amount based on selected subscription
    const calculateTotalAmount = (subscription) => {
        let amount = 0;
        switch (subscription) {
            case '12':
                amount = 179;
                break;
            case '6':
                amount = 149;
                break;
            case '3':
                amount = 99;
                break;
            default:
                break;
        }
        const gst = amount * 0.18;
        const total = amount + gst;
        return total.toFixed(2);
    };

    return (
        <div className='ContentContanier'>
            <div className="MainLookup">
                <div className="header">
                    <h2 style={{ color: '#ffff' }}>Access curated courses worth</h2>
                    <h1 style={{ color: '#fff', margin: 0 }}><span style={{ textDecoration: 'line-through', textDecorationColor: 'red' }}>18,500</span> at just <span style={{ color: '#0096FF' }}>&#8377; 99</span> per year</h1>
                </div>
                <div className="pointer">
                    <img src="assects\Icon.png" alt="" height='50px' />
                    <h4 style={{ color: '#FFF', fontSize: '22px' }}><span style={{ color: '#0096FF' }}>100+</span> Job relevant courses</h4>
                </div>
                <div className="pointer">
                    <img src="assects\Icon Clock.png" alt="" height='50px' />
                    <h4 style={{ color: '#fff', fontSize: '22px' }}> <span style={{ color: '#0096FF' }}>20,000+</span> Hours of content</h4>
                </div>
                <div className="pointer">
                    <img src="assects/IconLive.png" alt="" height='50px' />
                    <h4 style={{ color: '#FFF', fontSize: '22px' }}> <span style={{ color: '#0096FF' }}>Exclusive</span> webinar access</h4>
                </div>
                <div className="pointer">
                    <img src="assects/Icon Clock.png" alt="" height='50px' />
                    <h4 style={{ color: '#FFF', fontSize: '22px' }}>Scholarship worth <span style={{ color: '#0096FF' }}>₹94,500</span></h4>
                </div>
                <div className="pointer">
                    <img src="assects/Icon Ads.png" alt="" height='50px' />
                    <h4 style={{ color: '#fff', fontSize: '22px' }}><span style={{ color: '#0096FF' }}>Ad Free</span> learning experience</h4>
                </div>
            </div>
            <div className="Form">
                <div className="ProgressBar">
                    <div className="stage">
                        <p className='num'>1</p>
                        <p className='para'>Sign Up</p>
                    </div>
                    <div className="stage">
                        <p className='num'>2</p>
                        <p className='para'>Subscribe</p>
                    </div>
                </div>
                <div className="FormHeader">
                    <p className='text'>Select your subcription plan</p>
                </div>
                <div className="InputContainer">
                    <div className="TextFeild" >
                        <input type="radio" name="sub" id="" disabled className='radio' />
                        <div className="textContanier">
                            <p style={{ color: 'grey' }}>12 Months Subscription</p>
                            <div className="right">
                                <p style={{ color: 'grey' }}>Total <b>₹99</b></p>
                                <div className="bottom" style={{ color: 'grey' }}>
                                    <p>&#8377;8</p>
                                    <p>/mo</p>
                                </div>
                            </div>
                        </div>
                        <div className="tag1">
                            <img src="/assects/Tag.png" alt="" width='90px' />
                        </div>
                    </div>
                    <div className="TextFeild2">
                        <input type="radio" name="subscription" value='12' checked={selectedSubscription == '12'} onChange={handleSubscriptionChange} id="" className='radio' />
                        <div className="textContanier">
                            <p>12 Months Subscription </p>
                            <div className="right">
                                <p>Total <b>₹179</b></p>
                                <div className="bottom">
                                    <p>&#8377;15</p>
                                    <p>/mo</p>
                                </div>
                            </div>
                        </div>
                        <div className="tag2">
                            <img src="assects\Tag (1).png" alt="" width='90px' />
                        </div>
                    </div>
                    <div className="TextFeild" >
                        <input type="radio" name="subscription" value='6' checked={selectedSubscription == '6'} onChange={handleSubscriptionChange} id="" className='radio' />
                        <div className="textContanier">
                            <p>6 Months Subscription </p>
                            <div className="right">
                                <p>Total <b>₹149</b></p>
                                <div className="bottom">
                                    <p>&#8377;15</p>
                                    <p>/mo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="TextFeild">
                        <input type="radio" name="subscription" value='3' checked={selectedSubscription == '3'} onChange={handleSubscriptionChange} id="" className='radio' />
                        <div className="textContanier">
                            <p>3 Months Subscription </p>
                            <div className="right">
                                <p>Total <b> ₹99</b></p>
                                <div className="bottom">
                                    <p>&#8377;33</p>
                                    <p>/mo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="SummaryContainer">
                    <div className="textContanier2">
                        <p>Subscription Fee</p>
                        <p>₹18,500</p>
                    </div>
                    <div className="alert">
                        <div className="alertHeader">
                            <div>
                                <p>Limited time offer</p>
                            </div>
                            <div>
                                <p>- ₹18,401</p>
                            </div>
                        </div>
                        <div className="alertBody">
                            <div className="IconClock">
                                <img src="assects/alertIcon.png" alt="" className='alertIcon' width='11px' height='10px' />
                                <div>
                                    <p className='offer'>Offer valid till 25th March 2023 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="textContanier">
                        {totalAmount > 0 && (
                            <>
                                <p>Total (Incl. of 18% GST)</p>
                                <h3>₹{totalAmount}</h3>
                            </>
                        )}
                    </div>
                </div>
                <div className="ButtonContainer">
                    <button className="secondaryBtn">CANCEL</button>
                    <button className="primaryBtn">PROCEED TO PAY</button>
                </div>
                <div className="IconContainer">
                    <img src="assects\Frame 12537.png" alt="" width='90px' />
                </div>
            </div>
        </div>
    )
}

export default ContentContanier