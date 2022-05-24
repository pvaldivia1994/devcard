import React from 'react';


export const PortfolioPage = () => {
  return (
    <div>
	    <section className="cta-section theme-bg-light py-5">
		    <div className="container text-center single-col-max-width">
			    <h2 className="heading">Portfolio</h2>
			    <div className="intro">
			    <p>Welcome to my online portfolio. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. I'm taking on freelance work at the moment. Want some help building your software?</p>
			    
			    </div>
			    <a className="btn btn-primary" href="contact.html" target="_blank"><i className="fas fa-paper-plane me-2"></i>Hire Me</a>
			    
			    
		    </div>
	    </section>
      
	    <section className="projects-list px-3 py-5 p-md-5">
		    <div className="container">
			    <div className="text-center">
				    <ul id="filters" className="filters mb-5 mx-auto   ps-0">
		                <li className="type active mb-3 mb-lg-0" data-filter="*">All</li>
		                <li className="type  mb-3 mb-lg-0" data-filter=".webapp">We App</li>
		                <li className="type  mb-3 mb-lg-0" data-filter=".mobileapp">Mobile App</li>
		                <li className="type  mb-3 mb-lg-0" data-filter=".frontend">Frontend</li>
		                <li className="type  mb-3 mb-lg-0" data-filter=".backend">Backend</li>
		            </ul> 
			    </div>
	            
			    <div className="project-cards row isotope">
					<div className="isotope-item col-md-6 mb-5 mobileapp frontend">
						<div className="card project-card">
							<div className="row">
								<div className="col-12 col-xl-5 card-img-holder">
									<img src="assets/images/project/project-1.jpg" className="card-img" alt="image" />
								</div>
								<div className="col-12 col-xl-7">
									<div className="card-body">
										<h5 className="card-title"><a href="project.html" className="theme-link">Project Heading</a></h5>
										<p className="card-text">Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
										<p className="card-text"><small className="text-muted">Client: Google</small></p>
									</div>
								</div>
							</div>
							<div className="link-mask">
								<a className="link-mask-link" href="project.html"></a>
								<div className="link-mask-text">
									<a className="btn btn-secondary" href="project.html">
										<i className="fas fa-eye me-2"></i>View Case Study
									</a>
								</div>
							</div> 
						</div> 
					</div> 
					<div className="isotope-item col-md-6 mb-5 webapp frontend">	
						<div className="card project-card">
							<div className="row">
								<div className="col-12 col-xl-5 card-img-holder">
									<img src="assets/images/project/project-2.jpg" className="card-img" alt="image" />
								</div>
								<div className="col-12 col-xl-7">
									<div className="card-body">
										<h5 className="card-title"><a href="project.html" className="theme-link">Project Heading</a></h5>
										<p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
										<p className="card-text"><small className="text-muted">Client: Dropbox</small></p>
									</div>
								</div>
							</div>
							<div className="link-mask">
								<a className="link-mask-link" href="project.html"></a>
								<div className="link-mask-text">
									<a className="btn btn-secondary" href="project.html">
										<i className="fas fa-eye me-2"></i>View Case Study
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="isotope-item col-md-6 mb-5 mobileapp">
						<div className="card project-card">
							<div className="row">
								<div className="col-12 col-xl-5 card-img-holder">
									<img src="assets/images/project/project-3.jpg" className="card-img" alt="image" />
								</div>
								<div className="col-12 col-xl-7">
									<div className="card-body">
										<h5 className="card-title"><a href="project.html" className="theme-link">Project Heading</a></h5>
										<p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
										<p className="card-text"><small className="text-muted">Client: Google</small></p>
									</div>
								</div>
							</div>
							<div className="link-mask">
								<a className="link-mask-link" href="project.html"></a>
								<div className="link-mask-text">
									<a className="btn btn-secondary" href="project.html">
										<i className="fas fa-eye me-2"></i>View Case Study
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="isotope-item col-md-6 mb-5 webapp backend">
						<div className="card project-card">
							<div className="row">
								<div className="col-12 col-xl-5 card-img-holder">
									<img src="assets/images/project/project-4.jpg" className="card-img" alt="image" />
								</div>
								<div className="col-12 col-xl-7">
									<div className="card-body">
										<h5 className="card-title"><a href="project.html" className="theme-link">Project Heading</a></h5>
										<p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
										<p className="card-text"><small className="text-muted">Client: Startup Hub</small></p>
									</div>
								</div>
							</div>
							<div className="link-mask">
								<a className="link-mask-link" href="project.html"></a>
								<div className="link-mask-text">
									<a className="btn btn-secondary" href="project.html">
										<i className="fas fa-eye me-2"></i>View Case Study
									</a>
								</div>
							</div> 
						</div> 
					</div> 
					<div className="isotope-item col-md-6 mb-5 mobileapp frontend">
						<div className="card project-card">
							<div className="row">
								<div className="col-12 col-xl-5 card-img-holder">
									<img src="assets/images/project/project-5.jpg" className="card-img" alt="image" />
								</div>
								<div className="col-12 col-xl-7">
									<div className="card-body">
										<h5 className="card-title"><a href="project.html" className="theme-link">Project Heading</a></h5>
										<p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
										<p className="card-text"><small className="text-muted">Client: SalesForce</small></p>
									</div>
								</div>
							</div>
							<div className="link-mask">
								<a className="link-mask-link" href="project.html"></a>
								<div className="link-mask-text">
									<a className="btn btn-secondary" href="project.html">
										<i className="fas fa-eye me-2"></i>View Case Study
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="isotope-item col-md-6 mb-5 webapp backend">
						<div className="card project-card">
							<div className="row">
								<div className="col-12 col-xl-5 card-img-holder">
									<img src="assets/images/project/project-6.jpg" className="card-img" alt="image" />
								</div>
								<div className="col-12 col-xl-7">
									<div className="card-body">
										<h5 className="card-title"><a href="project.html" className="theme-link">Project Heading</a></h5>
										<p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
										<p className="card-text"><small className="text-muted">Client: Uber</small></p>
									</div>
								</div>
							</div>
							<div className="link-mask">
								<a className="link-mask-link" href="project.html"></a>
								<div className="link-mask-text">
									<a className="btn btn-secondary" href="project.html">
										<i className="fas fa-eye me-2"></i>View Case Study
									</a>
								</div>
							</div> 
						</div> 
					</div> 
					<div className="isotope-item col-md-6 mb-5 webapp frontend backend">
						<div className="card project-card">
							<div className="row">
								<div className="col-12 col-xl-5 card-img-holder">
									<img src="assets/images/project/project-7.jpg" className="card-img" alt="image" />
								</div>
								<div className="col-12 col-xl-7">
									<div className="card-body">
										<h5 className="card-title"><a href="project.html" className="theme-link">Project Heading</a></h5>
										<p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
										<p className="card-text"><small className="text-muted">Client: Lyft</small></p>
									</div>
								</div>
							</div>
							<div className="link-mask">
								<a className="link-mask-link" href="project.html"></a>
								<div className="link-mask-text">
									<a className="btn btn-secondary" href="project.html">
										<i className="fas fa-eye me-2"></i>View Case Study
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="isotope-item col-md-6 mb-5 webapp frontend">
						<div className="card project-card">
							<div className="row">
								<div className="col-12 col-xl-5 card-img-holder">
									<img src="assets/images/project/project-8.jpg" className="card-img" alt="image" />
								</div>
								<div className="col-12 col-xl-7">
									<div className="card-body">
										<h5 className="card-title"><a href="project.html" className="theme-link">Project Heading</a></h5>
										<p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
										<p className="card-text"><small className="text-muted">Client: GitLab</small></p>
									</div>
								</div>
							</div>
							<div className="link-mask">
								<a className="link-mask-link" href="project.html"></a>
								<div className="link-mask-text">
									<a className="btn btn-secondary" href="project.html">
										<i className="fas fa-eye me-2"></i>View Case Study
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			
		    </div>
	    </section>
	    
	    
    </div>
  )
}
