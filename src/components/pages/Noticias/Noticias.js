import ReactDOM from 'react-dom/client';
import React, { createElement, useState} from 'react'
import Navbar1 from '../../navegation/navbar/Navbar1'
import Footer from '../../navegation/footer/Footer'
import './Noticias.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faSearch} from '@fortawesome/free-solid-svg-icons';
import {Collapse, Fade} from 'react-bootstrap'
import { createPortal } from 'react-dom';
import { hover } from '@testing-library/user-event/dist/hover';


class Noticias extends React.Component {
    constructor(props){
        super(props);
        this.state={
            cantidadNoticias: 3
        };
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(cant, e){
       this.setState(state=>({cantidadNoticias:cant}));
    }
    
    render(){
        /*Estructura de la noticia*/
        const ContenidoNoticias=(props)=>{
            const [open,setOpen]=useState(false);
            return(
            <div className="col-md-4 col-sm-6 mix mix-082e3a1 portfolio-item business-082e3a1 onepage-082e3a1" >
                
                <span className='span-img' style={{backgrounColor:'black'}}>
                <Fade in={!open}>
                        <img src={props.srcImg} alt="Switch Pro" onMouseEnter={()=>setOpen(true)} onMouseOut={()=>setOpen(false)}/>
                </Fade>
                </span>
                
                <Fade className="portfolio-buttons" in={open}>
                <span onMouseOver={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
                    <a className='test-popup-link' href={props.LinkPage}  onMouseOver={()=>setOpen(true)}>
                        <i className='fa fa-search'><FontAwesomeIcon icon={faLink} size='2x' fixedWidth/></i>
                    </a>
                    <a className='test-popup-link' href={props.linkImg} target="_blank" onMouseOver={()=>setOpen(true)}>
                        <i className='fa fa-search'><FontAwesomeIcon icon={faSearch} size='2x' fixedWidth/></i>
                    </a>
                </span>
                </Fade>
            </div>
            );
        }
        /*Formar Array de noticias dependiendo de la cantidad(props.len) de noticias y las rutas de las imagenes*/
        const MostrarNoticias=(props)=>{
            const array=[];
            for (let i = 0; i < props.len; i++) {
                array.push(
                        <ContenidoNoticias 
                            key={i}
                            srcImg="https://thumbs.dreamstime.com/b/ilustraci%C3%B3n-de-vectores-fondo-live-breaking-news-im%C3%A1genes-noticias-%C3%BAltima-hora-en-directo-eps-170013711.jpg" 
                            linkImg="https://james.amigos4all.com/wp-content/plugins/widgetkit-for-elementor/dist/images/placeholder.jpg" 
                            LinkPage="https://www.unicauca.edu.co/versionP/acerca-de-unicauca/centros/cecav"
                        />
                    )
            }
            return(
                array 
            );
        }

    return(
    <div className='main-noticias'>
        <Navbar1 />
        <section  className="elementor-section elementor-top-section elementor-element elementor-element-bdd763f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="bdd763f" data-element_type="section">
			<div id='shape-top' className="elementor-shape elementor-shape-top" data-negative="false">
			    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 20" preserveAspectRatio="none">
	                <path className="elementor-shape-fill" d="M0,0v3c0,0,393.8,0,483.4,0c9.2,0,16.6,7.4,16.6,16.6c0-9.1,7.4-16.6,16.6-16.6C606.2,3,1000,3,1000,3V0H0z"></path>
                </svg>		
            </div>
            <div className="elementor-container elementor-column-gap-default">
				<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b43338a" data-id="b43338a" data-element_type="column">
			        <div className="elementor-widget-wrap elementor-element-populated">
				        <div className="elementor-element elementor-element-3cfed6b elementor-widget elementor-widget-heading" data-id="3cfed6b" data-element_type="widget" data-widget_type="heading.default">
				            <div className="elementor-widget-container">
			                    <h1 className="elementor-heading-title elementor-size-default">Sección de noticias</h1>
                            </div>
			            </div>
				    </div>
		        </div>
			</div>
			<div id='shape-bottom' className="elementor-shape elementor-shape-bottom" data-negative="false">
			    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 20" preserveAspectRatio="none">
	                <path className="elementor-shape-fill" d="M0,0v3c0,0,393.8,0,483.4,0c9.2,0,16.6,7.4,16.6,16.6c0-9.1,7.4-16.6,16.6-16.6C606.2,3,1000,3,1000,3V0H0z"></path>
                </svg>		
            </div>
		</section>  
        <section className="elementor-section elementor-top-section elementor-element elementor-element-1a63a0d elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1a63a0d" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div className="elementor-container elementor-column-gap-default">
				<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-55e9d7d" data-id="55e9d7d" data-element_type="column">
			        <div className="elementor-widget-wrap elementor-element-populated">
						<div className="elementor-element elementor-element-082e3a1 elementor-widget elementor-widget-widgetkit-for-elementor-portfolio" data-id="082e3a1" data-element_type="widget" data-widget_type="widgetkit-for-elementor-portfolio.default">
				            <div className="elementor-widget-container">
			                    <div className="tgx-portfolio">
                                    <ul className="portfolio-filter round text-center">

                                        {/*Cantidad de noticias dependiendo del tag(tamaño del array de noticias)*/}
                                        <li><a onClick={(e)=>this.handleClick(3,e)} className="" href="#" data-filter="*" >Todas</a></li>       
                                        <li><a onClick={(e)=>this.handleClick(4,e)} href="#" data-filter=".noticas-082e3a1" >Noticas</a></li>    
                                        <li><a onClick={(e)=>this.handleClick(5,e)} href="#" data-filter=".cursosdisponibles-082e3a1" >Cursos disponibles</a></li>          
                                        <li><a onClick={(e)=>this.handleClick(6,e)} href="#" data-filter=".próximoseventos-082e3a1" >Próximos eventos</a></li>
                                    </ul>
                                    <div id="hover-1" className="hover-1">
                                        <div id='news' className="row">
                                            <MostrarNoticias len={this.state.cantidadNoticias}/>
                                        </div>
                                    </div>

                                </div>		
                            </div>
                         
				        </div>
					</div>
		        </div>
			</div>
		</section>
        <Footer />
    </div>
    )};
}


export default Noticias