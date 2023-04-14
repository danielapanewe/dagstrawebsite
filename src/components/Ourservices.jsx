import React from 'react';
import Secondcard from './Secondcard';
import imageserviceone from '../assets/service1.jpg';
import imageservicetwo from '../assets/service2.jpg';
import imageservicethree from '../assets/service3.jpg';

export default function Ourservices() {
    return (
        <section className="ourservice mt-14 bg-[#fafafa] py-16">
            <div className="containeur">
                <h2 className="title text-primarycolor text-center">
                    NOS SERVICES
                </h2>
                <div className="ourservice__content mt-12">
                    <div className="card grid gap-4 md:gap-0 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg">
                            <Secondcard
                                image={imageserviceone}
                                title={`Business Consulting`}
                                text={`As one of the world’s largest accountancy networks, elixir helps a diverse range of clients with a diverse range of needs.This is especially true of our Advisory Practice, which provides corporate finance and transaction services, business restructuring.`}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg ">
                            <Secondcard
                                image={imageservicetwo}
                                title={`Tax consulting`}
                                text={`Elixir serves clients across the country and around the world as they navigate an increasingly complex tax landscape. Our tax professionals draw on deep experience and industry-specific knowledge to deliver clients the insights and innovation they need.`}
                                order={`2`}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg">
                            <Secondcard
                                image={imageservicethree}
                                title={`Advisory`}
                                text={`To help you understand what this road looks like, we surveyed 1165 digital marketers across Europe and North America to explore current trends and priorities in digital marketing.`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
