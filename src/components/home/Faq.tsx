import React from 'react';

const Faq = () => {
    return (
        <div>
            <div className="container">
                <div id="accordion" className="py-5">
                    <div className="card border-0 wow fadeInUp">
                        <div className="card-header p-0 border-0" id="heading-239">
                            <button className="btn btn-link accordion-title border-0 collapse" data-toggle="collapse" data-target="#collapse-239" aria-expanded="true" aria-controls="#collapse-239"><i className="fas fa-minus text-center d-flex align-items-center justify-content-center h-100"></i>What makes Travel Crafter different from other travel agencies?</button>
                        </div>
                        <div id="collapse-239" className="collapse" aria-labelledby="heading-239" data-parent="#accordion">
                            <div className="card-body accordion-body">
                                <p>At Travel Crafter, we believe that travel is not just about visiting new places, but about creating unique and unforgettable experiences. We take the time to get to know our clients and their preferences to craft personalized travel itineraries that meet their needs and exceed their expectations.</p>
                            </div>
                        </div>
                    </div>

                    <div className="card border-0 wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>
                        <div className="card-header p-0 border-0" id="heading-240">
                            <button className="btn btn-link accordion-title border-0 collapsed" data-toggle="collapse" data-target="#collapse-240" aria-expanded="false" aria-controls="#collapse-240"><i className="fas fa-minus text-center d-flex align-items-center justify-content-center h-100"></i>Do you offer travel insurance?</button>
                        </div>
                        <div id="collapse-240" className="collapse" aria-labelledby="heading-240" data-parent="#accordion">
                            <div className="card-body accordion-body">
                                <p>Yes, we offer travel insurance to protect our clients' investments and provide peace of mind during their travels.</p>
                            </div>
                        </div>
                    </div>

                    <div className="card border-0 wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>
                        <div className="card-header p-0 border-0" id="heading-241">
                            <button className="btn btn-link accordion-title border-0 collapsed" data-toggle="collapse" data-target="#collapse-241" aria-expanded="false" aria-controls="#collapse-241"><i className="fas fa-minus text-center d-flex align-items-center justify-content-center h-100"></i>Can you help me plan a honeymoon?</button>
                        </div>
                        <div id="collapse-241" className="collapse " aria-labelledby="heading-241" data-parent="#accordion">
                            <div className="card-body accordion-body">
                                <p>Absolutely! We specialize in creating romantic and unforgettable honeymoon experiences for couples, and we can tailor the itinerary to suit your preferences and budget.</p>
                            </div>
                        </div>
                    </div>

                    <div className="card border-0 wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>
                        <div className="card-header p-0 border-0" id="heading-242">
                            <button className="btn btn-link accordion-title border-0 collapsed" data-toggle="collapse" data-target="#collapse-242" aria-expanded="false" aria-controls="#collapse-242"><i className="fas fa-minus text-center d-flex align-items-center justify-content-center h-100"></i>Do you offer any discounts or promotions?</button>
                        </div>
                        <div id="collapse-242" className="collapse " aria-labelledby="heading-242" data-parent="#accordion">
                            <div className="card-body accordion-body">
                                <p>We occasionally offer discounts and promotions to our clients, especially during off-season travel periods or for group bookings. Please contact us to find out about any current offers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;