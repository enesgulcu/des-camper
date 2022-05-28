import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
		<div className="main-banner">
			<div className="d-table">
				<div className="d-table-cell">
					<div className="container">
						<div className="row h-100 justify-content-center align-items-center">
							<div className="col-lg-5">
								<div className="hero-content">
									<h1>"Des Camper" Web Page Created</h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</p>
									
									<Link href="/contact">
										<a className="btn btn-primary">Get Started</a>
									</Link>
								</div>
							</div>
                            
							<div className="col-lg-6 offset-lg-1">
                                <div className='relative group w-[350px] md:w-[500px] lg:w-[600px] mx-auto'>

                                    <img className='w-full' src="/images/caravan/md.png" alt="" />
									
										
											<div className="hover:p-5 hover:bg-orange-500 ease-in-out duration-300 cursor-pointer animate-spin hidden md:block md:bottom-[7rem] md:left-[7rem] lg:bottom-[8rem] lg:left-[8rem] absolute p-[15px] bg-green-500 border-2 border-x-black  rounded-full">
											</div>
											<div className='w-[15rem] md:block md:bottom-[5rem] md:left-[1rem] lg:bottom-[6rem] lg:left-[2rem] absolute p-[10px] bg-orange-600 border-2 rounded-xl border-gray-800'><p className='text-white text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi natus sint saepe</p></div>

											<div className="hover:p-5 hover:bg-orange-500 ease-in-out duration-300 cursor-pointer animate-spin hidden md:block md:bottom-[11rem] md:left-[7.2rem] lg:bottom-[14rem] lg:left-[9rem] absolute p-[15px] w-fit bg-green-600 border-2 border-x-black  rounded-full"></div>
											<div className="hover:p-5 hover:bg-orange-500 ease-in-out duration-300 cursor-pointer animate-spin hidden md:block md:bottom-[7.5rem] md:left-[23.5rem] lg:bottom-[9rem] lg:left-[29rem] absolute p-[15px] w-fit bg-green-600 border-2 border-x-black  rounded-full"></div>
											<div className="hover:p-5 hover:bg-orange-500 ease-in-out duration-300 cursor-pointer animate-spin hidden md:block md:bottom-[1rem] md:left-[22.5rem] lg:bottom-[2rem] lg:left-[27rem] absolute p-[15px] w-fit bg-green-600 border-2 border-x-black  rounded-full"></div>
											<div className="hover:p-5 hover:bg-orange-500 ease-in-out duration-300 cursor-pointer animate-spin hidden md:block md:bottom-[0.2rem] md:left-[4rem] lg:bottom-[1rem] lg:left-[5rem] absolute p-[15px] w-fit bg-green-600 border-2 border-x-black  rounded-full"></div>
										
									
                                </div>
							</div>
						</div>
					</div>
				</div>
			</div>

            {/* Shape Images */}
			<div className="shape1">
				<img src="/images/shape1.png" alt="shape"/>
			</div>
			<div className="shape2 rotateme">
				<img src="/images/shape2.svg" alt="shape"/>
			</div>
			<div className="shape3">
				<img src="/images/shape3.svg" alt="shape"/>
			</div>
			<div className="shape4">
				<img src="/images/shape4.svg" alt="shape"/>
			</div>
			<div className="shape5">
				<img src="/images/shape5.png" alt="shape"/>
			</div>
			<div className="shape6 rotateme">
				<img src="/images/shape4.svg" alt="shape"/>
			</div>
			<div className="shape7">
				<img src="/images/shape4.svg" alt="shape"/>
			</div>
			<div className="shape8 rotateme">
				<img src="/images/shape2.svg" alt="shape"/>
			</div>
		</div>
    )
}

export default MainBanner