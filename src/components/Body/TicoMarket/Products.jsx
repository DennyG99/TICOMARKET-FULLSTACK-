import React from "react";

export function Products() {  
    
  return (
    <>
  {/*=====================================
		Search
		======================================*/}
  <div className="ps-search--mobile">
    <form className="ps-form--search-mobile" action="index.html" method="get">
      <div className="form-group--nest">
        <input className="form-control" type="text" placeholder="Search something..." />
        <button><i className="icon-magnifier" /></button>
      </div>
    </form>
  </div>
  {/* End Header Mobile */}
  {/*=====================================
    Breadcrumb
    ======================================*/}  
  <div className="ps-breadcrumb">
    <div className="container">
      <ul className="breadcrumb">
        <li><a href="index.html">Home</a></li>
        <li><a href="shop-default.html">Garden &amp; Kitchen</a></li>
        <li><a href="shop-default.html">Furniture</a></li>
        <li>Sofá largo de tela de Corea en color azul marino</li>
      </ul>
    </div>
  </div>
  {/*=====================================
    Product Content
    ======================================*/} 
  <div className="ps-page--product">
    <div className="ps-container">
      {/*=====================================
    		Product Container
    		======================================*/} 
      <div className="ps-page__container">
        {/*=====================================
    			Left Column
    			======================================*/} 
        <div className="ps-page__left">
          <div className="ps-product--detail ps-product--fullwidth">
            {/*=====================================
    					Product Header
    					======================================*/} 
            <div className="ps-product__header">
              {/*=====================================
    						Gallery
    						======================================*/} 
              <div className="ps-product__thumbnail" data-vertical="true">
                
                <div className="ps-product__variants" data-item={4} data-md={4} data-sm={4} data-arrow="false">
                  <div className="item">
                    <img src="https://picsum.photos/200/300" alt />
                  </div>
                  <div className="item">
                    <img src="https://picsum.photos/200/300" alt />
                  </div>
                  <div className="item">
                    <img src="https://picsum.photos/200/300" alt />
                  </div>
                  <div className="item">
                    <img src="https://picsum.photos/200/300" alt />
                  </div>
                </div>
              </div>{/* End Gallery */}
              {/*=====================================
    						Product Info
    						======================================*/} 
              <div className="ps-product__info">
                <h1>Sofá largo de tela de Corea en color azul marino</h1>
                <div className="ps-product__meta">
                  <p>Brand:<a href="shop-default.html">Gallaxy</a></p>
                  <div className="ps-product__rating">
                    <select className="ps-rating" data-read-only="true">
                      <option value={1}>1</option>
                      <option value={1}>2</option>
                      <option value={1}>3</option>
                      <option value={1}>4</option>
                      <option value={2}>5</option>
                    </select>
                    <span>(1 review)</span>
                  </div>
                </div>
                <h4 className="ps-product__price sale">$93.59
                  <del> $125.17</del><small> (-25%)</small>
                </h4>
                <h4 className="ps-product__price">$679.80</h4>
                <div className="ps-product__desc">
                  <p> 
                    Sold By:<a className="mr-20" href="shop-default.html"><strong> Tienda Juvenil</strong></a> 
                    Status:<a href="shop-default.html"><strong className="ps-tag--in-stock"> In stock</strong></a>
                  </p>
                  <ul className="ps-list--dot">
                    <li> Altavoz estéreo activo portátil y sin restricciones</li>
                    <li> Libre de los confines de cables y cuerdas</li>
                    <li> 20 horas de capacidades portátiles</li>
                    <li> Cable en espiral de doble extremo con conectores estéreo de 3,5 mm incluidos</li>
                    <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                  </ul>
                </div>
                <div className="ps-product__variations">
                  <figure>
                    <figcaption>Color: <strong> Escoge una opcion</strong></figcaption>
                    <div className="ps-variant ps-variant--image">
                      <span className="ps-variant__tooltip">Azul</span>
                      <img src="https://picsum.photos/200/300" alt />
                    </div>
                    <div className="ps-variant ps-variant--image">
                      <span className="ps-variant__tooltip"> Oscuro</span>
                      <img src="https://picsum.photos/200/300" alt />
                    </div>
                    <div className="ps-variant ps-variant--image">
                      <span className="ps-variant__tooltip"> Rosado</span>
                      <img src="https://picsum.photos/200/300" alt />
                    </div>
                  </figure>
                  <figure>
                    <figcaption>Talla<strong> Escoge una opcion</strong></figcaption>
                    <div className="ps-variant ps-variant--size"><span className="ps-variant__tooltip">S</span><span className="ps-variant__size">S</span></div>
                    <div className="ps-variant ps-variant--size"><span className="ps-variant__tooltip"> M</span><span className="ps-variant__size">M</span></div>
                    <div className="ps-variant ps-variant--size"><span className="ps-variant__tooltip"> L</span><span className="ps-variant__size">L</span></div>
                  </figure>
                </div>
                <div className="ps-product__countdown">
                  <figure>
                    <figcaption> ¡No te lo pierdas! Esta promoción expirará en:</figcaption>
                    <ul className="ps-countdown" data-time="July 21, 2020 15:37:25">
                      <li><span className="days" />
                        <p>Dias</p>
                      </li>
                      <li><span className="hours" />
                        <p>Horas</p>
                      </li>
                      <li><span className="minutes" />
                        <p>Minutos</p>
                      </li>
                      <li><span className="seconds" />
                        <p>Segundos</p>
                      </li>
                    </ul>
                  </figure>
                  <figure>
                    <figcaption>Articulos Vendidos</figcaption>
                    <div className="ps-product__progress-bar ps-progress" data-value={28}>
                      <div className="ps-progress__value"><span /></div>
                      <p><b>20/85</b> Vendido</p>
                    </div>
                  </figure>
                </div>
                <div className="ps-product__shopping">
                  <figure>
                    <figcaption>Cantidad</figcaption>
                    <div className="form-group--number">
                      <button className="up">
                        <i className="fa fa-plus" />
                      </button>
                      <button className="down">
                        <i className="fa fa-minus" />
                      </button>
                      <input className="form-control" type="text" placeholder={1} />
                    </div>
                  </figure>
                  <a className="ps-btn ps-btn--black" href="#">Agregar al carrito</a>
                  <a className="ps-btn" href="#">Comprar Ahora</a>
                  <div className="ps-product__actions">
                    <a href="#">
                      <i className="icon-heart" />
                    </a>
                  </div>
                </div>
                <div className="ps-product__specification">
                  <a className="report" href="#">Reportar Abuso</a>
                  <p><strong>SKU:</strong> SF1133569600-1</p>
                  <p className="categories">
                    <strong> Categorias:</strong>
                    <a href="#">Consumer Electronics</a>,<a href="#"> Refrigerador</a>,<a href="#">Bebes &amp; Madres</a>
                  </p>
                  <p className="tags"><strong> Tags</strong>
                    <a href="#">sofa</a>
                  </p>
                </div>
                <div className="ps-product__sharing">
                  <a className="facebook" href="#">
                    <i className="fab fa-facebook" />
                  </a>
                  <a className="twitter" href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="linkedin" href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                  <a className="instagram" href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div> {/* End Product Info */}
            </div> {/* End Product header */}
            {/*=====================================
    					Product Content
    					======================================*/} 
            <div className="ps-product__content ps-tab-root">
              <div className="ps-block--bought-toggether">
                <h4>Frecuentemente Compraron Juntos</h4>
                <div className="ps-block__content">
                  <div className="ps-block__items">
                    <div className="ps-block__item">
                      <div className="ps-product ps-product--simple">
                        <div className="ps-product__thumbnail">
                          <a href="product-default.html">
                            <img src="https://picsum.photos/200/300" alt />
                          </a>
                        </div>
                        <div className="ps-product__container">
                          <div className="ps-product__content">
                            <a className="ps-product__title" href="product-default.html">Sofá largo de tela de Corea en color azul marino</a>
                            <p className="ps-product__price">$679.80</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ps-block__item">
                      <div className="ps-product ps-product--simple">
                        <div className="ps-product__thumbnail">
                          <a href="product-default.html">
                            <img src="https://picsum.photos/200/300" alt />
                          </a>
                        </div>
                        <div className="ps-product__container">
                          <div className="ps-product__content">
                            <a className="ps-product__title" href="product-default.html">Fabric Chair In Brown Color</a>
                            <p className="ps-product__price">$120.80</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ps-block__item ps-block__total">
                      <p>Total Price:<strong> $1000.30</strong></p>
                      <a className="ps-btn" href="#">Agregar Todo al carrito</a>
                      <a className="ps-btn ps-btn--gray ps-btn--outline" href="#">Agregar Todo a la lista deseos</a>
                    </div>
                  </div>
                  <div className="ps-block__footer">
                    <div className="ps-checkbox">
                      <input className="form-control" type="checkbox" id="product-bought-1" name="product-bought" defaultChecked />
                      <label htmlFor="product-bought-1"><strong>This item: </strong> Sofá largo de tela de Corea en color azul marino <span>$679.80</span></label>
                    </div>
                    <div className="ps-checkbox">
                      <input className="form-control" type="checkbox" id="product-bought-2" name="product-bought" defaultChecked />
                      <label htmlFor="product-bought-2">Fabric Chair In Brown Color <span>$120.80</span></label>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="ps-tab-list">
                <li className="active"><a href="#tab-1">Descripcion</a></li>
                <li><a href="#tab-2">Especificacion</a></li>
                <li><a href="#tab-3">Vendedor</a></li>
                <li><a href="#tab-4">Reseñas (1)</a></li>
                <li><a href="#tab-5">Preguentas y Respuestas</a></li>
                <li><a href="#tab-6">Mas Offertas</a></li>
              </ul>
              <div className="ps-tabs">
                <div className="ps-tab active" id="tab-1">
                  <div className="ps-document">
                    <h5>Encarnando el espíritu crudo y rebelde del rock and roll</h5>
                    <p>Encarnando el espíritu crudo y rebelde del rock 'n' roll, el altavoz estéreo activo portátil Kilburn adopta el inconfundible aspecto y sonido de Marshall, desenchufa los cables y lleva el espectáculo a la carretera.</p>
                    <p>Con un peso inferior a 7 libras, el Kilburn es una pieza de ingeniería de estilo vintage ligera. Estableciendo la barra como uno de los altavoces más ruidosos de su clase, el Kilburn es un héroe compacto y de buen corazón con un audio bien equilibrado que cuenta con un rango medio claro y agudos extendidos para un sonido que es a la vez articulado y pronunciado. Las perillas analógicas le permiten ajustar los controles a sus preferencias personales, mientras que la correa de cuero inspirada en la guitarra permite un viaje fácil y elegante.</p>
                    <img className="mb-30" src="https://picsum.photos/200/300" alt />
                    <h5>Que es lo que obtienes</h5>
                    <p>El sonido de Marshall, desenchufa los cables y lleva el espectáculo a la carretera..</p>
                    <ul className="pl-0">
                      <li>No FM radio (Excepto por las unidades de T-Mobile en los Estados Unidos, hasta ahora)</li>
                      <li>Sin emisor infrarrojo</li>
                      <li>Sin altavoces estéreo</li>
                    </ul>
                    <p>Si has sumergido el teléfono en la bañera, deberás secar el puerto de carga antes de enchufarlo. Samsung no ha reinventado la rueda con el diseño del Galaxy S7, pero no necesitaba hacerlo. El Galaxy S6 era un dispositivo con un diseño excelente, y el S7 ha logrado mejorar eso</p>
                  </div>
                </div>
                <div className="ps-tab" id="tab-2">
                  <div className="table-responsive">
                    <table className="table table-bordered ps-table ps-table--specification">
                      <tbody>
                        <tr>
                          <td>Color</td>
                          <td>Black, Gray</td>
                        </tr>
                        <tr>
                          <td>Style</td>
                          <td>Ear Hook</td>
                        </tr>
                        <tr>
                          <td>Wireless</td>
                          <td>Yes</td>
                        </tr>
                        <tr>
                          <td>Dimensions</td>
                          <td>5.5 x 5.5 x 9.5 inches</td>
                        </tr>
                        <tr>
                          <td>Weight</td>
                          <td>6.61 pounds</td>
                        </tr>
                        <tr>
                          <td>Battery Life</td>
                          <td>20 hours</td>
                        </tr>
                        <tr>
                          <td>Bluetooth</td>
                          <td>Yes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="ps-tab" id="tab-3">
                  <h4>GoPro</h4>
                  <p>Digiworld US, New York’s no.1 online retailer was established in May 2012 with the aim and vision to become the one-stop shop for retail in New York with implementation of best practices both online</p>
                  <a href="#">More Products from gopro</a>
                </div>
                <div className="ps-tab" id="tab-4">
                  <div className="row">
                    <div className="col-lg-5 col-12 ">
                      <div className="ps-block--average-rating">
                        <div className="ps-block__header">
                          <h3>4.00</h3>
                          <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                          </select>
                          <span>1 Review</span>
                        </div>
                        <div className="ps-block__star">
                          <span>5 Star</span>
                          <div className="ps-progress" data-value={100}>
                            <span />
                          </div>
                          <span>100%</span>
                        </div>
                        <div className="ps-block__star">
                          <span>4 Star</span>
                          <div className="ps-progress" data-value={0}>
                            <span />
                          </div>
                          <span>0</span>
                        </div>
                        <div className="ps-block__star">
                          <span>3 Star</span>
                          <div className="ps-progress" data-value={0}>
                            <span />
                          </div>
                          <span>0</span>
                        </div>
                        <div className="ps-block__star">
                          <span>2 Star</span>
                          <div className="ps-progress" data-value={0}>
                            <span />
                          </div>
                          <span>0</span>
                        </div>
                        <div className="ps-block__star">
                          <span>1 Star</span>
                          <div className="ps-progress" data-value={0}>
                            <span />
                          </div>
                          <span>0</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ">
                      <form className="ps-form--review" action="index.html" method="get">
                        <h4>Submit Your Review</h4>
                        <p>Your email address will not be published. Required fields are marked<sup>*</sup></p>
                        <div className="form-group form-group__rating">
                          <label>Your rating of this product</label>
                          <select className="ps-rating" data-read-only="false">
                            <option value={0}>0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <textarea className="form-control" rows={6} placeholder="Write your review here" defaultValue={"                                                    \t\n                                                    "} />
                        </div>
                        <div className="row">
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                              <input className="form-control" type="text" placeholder="Your Name" />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                              <input className="form-control" type="email" placeholder="Your Email" />
                            </div>
                          </div>
                        </div>
                        <div className="form-group submit">
                          <button className="ps-btn">Submit Review</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="ps-tab" id="tab-5">
                  <div className="ps-block--questions-answers">
                    <h3>Questions and Answers</h3>
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder="Have a question? Search for answer?" />
                    </div>
                  </div>
                </div>
                <div className="ps-tab active" id="tab-6">
                  <p>Lo siento, no hay más ofertas disponibles.</p>
                </div>
              </div>
            </div>{/*  End product content */}
          </div>
        </div>{/* End Left Column */}
        {/*=====================================
    			Right Column
    			======================================*/} 
        <div className="ps-page__right d-block d-sm-none d-xl-block">
          <aside className="widget widget_product widget_features">
            <p><i className="icon-network" /> Flete Internacional</p>
            <p><i className="icon-3d-rotate" /> Devolución gratuita de 7 días si es elegible, muy fácil.</p>
            <p><i className="icon-receipt" /> El proveedor emite facturas para este producto.</p>
            <p><i className="icon-credit-card" /> Paga cuando recibe los productos</p>
          </aside>
          <aside className="widget widget_sell-on-site">
            <p><i className="icon-store" /> Vender en TikoMarket?<a href="#"> Registrese Ahora !</a></p>
          </aside>
          <aside className="widget widget_same-brand">
            <h3>Misma Marca</h3>
            <div className="widget__content">
              <div className="ps-product">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html">
                    <img src="https://picsum.photos/200/300" alt />
                  </a>
                  <div className="ps-product__badge">-37%</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Read More">
                        <i className="icon-bag2" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Vista Rápida">
                        <i className="icon-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Agregar a la Lista Deseos">
                        <i className="icon-heart" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <a className="ps-product__vendor" href="#">Robert's Store</a>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="product-default.html">Novela del Gran Slam Indoor de Salto de Obstáculos</a>
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value={1}>1</option>
                        <option value={1}>2</option>
                        <option value={1}>3</option>
                        <option value={1}>4</option>
                        <option value={2}>5</option>
                      </select>
                      <span>01</span>
                    </div>
                    <p className="ps-product__price sale">$32.99 <del>$41.00 </del></p>
                  </div>
                  <div className="ps-product__content hover">
                    <a className="ps-product__title" href="product-default.html">Grand Slam Indoor Of Show Jumping Novel</a>
                    <p className="ps-product__price sale">$32.99 <del>$41.00 </del></p>
                  </div>
                </div>
              </div>
              <div className="ps-product">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"><img src="https://picsum.photos/200/300" alt /></a>
                  <div className="ps-product__badge">-5%</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Leer Más">
                        <i className="icon-bag2" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Vista Rápida">
                        <i className="icon-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist">
                        <i className="icon-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                        <i className="icon-chart-bars" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <a className="ps-product__vendor" href="#">Tienda Juvenil</a>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="product-default.html">Sound Intone I65 Earphone White Version</a>
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value={1}>1</option>
                        <option value={1}>2</option>
                        <option value={1}>3</option>
                        <option value={1}>4</option>
                        <option value={2}>5</option>
                      </select>
                      <span>01</span>
                    </div>
                    <p className="ps-product__price sale">$100.99 <del>$106.00 </del></p>
                  </div>
                  <div className="ps-product__content hover">
                    <a className="ps-product__title" href="product-default.html">Sound Intone I65 Earphone White Version</a>
                    <p className="ps-product__price sale">$100.99 <del>$106.00 </del></p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>{/* End Right Column */}
      </div>{/*  End Product Container */}
      {/*=====================================
			Customers who bought
			======================================*/} 
      <div className="ps-section--default ps-customer-bought">
        <div className="ps-section__header">
          <h3>Clientes quienes compraron este item tambien compraron</h3>
        </div>
        <div className="ps-section__content">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-6 ">
              <div className="ps-product">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html">
                    <img src="https://picsum.photos/200/300" alt />
                  </a>
                  <div className="ps-product__badge hot">hot</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Leer Más">
                        <i className="icon-bag2" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Vista Rápida">
                        <i className="icon-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Agregar a la Lista Deseos">
                        <i className="icon-heart" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <a className="ps-product__vendor" href="#">Global Office</a>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="product-default.html">Xbox One Controlador Inalambrico Color Negro</a>
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value={1}>1</option>
                        <option value={1}>2</option>
                        <option value={1}>3</option>
                        <option value={1}>4</option>
                        <option value={2}>5</option>
                      </select>
                      <span>01</span>
                    </div>
                    <p className="ps-product__price">$55.99</p>
                  </div>
                  <div className="ps-product__content hover">
                    <a className="ps-product__title" href="product-default.html">Xbox One Wireless Controller Black Color</a>
                    <p className="ps-product__price">$55.99</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 ">
              <div className="ps-product">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html">
                    <img src="https://picsum.photos/200/300" alt />
                  </a>
                  <div className="ps-product__badge">-37%</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Leer Más">
                        <i className="icon-bag2" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Vista Rapida">
                        <i className="icon-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Agregar a la Lista Deseos">
                        <i className="icon-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                        <i className="icon-chart-bars" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <a className="ps-product__vendor" href="#">Robert's Store</a>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="product-default.html">Grand Slam Indoor Of Show Jumping Novel</a>
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value={1}>1</option>
                        <option value={1}>2</option>
                        <option value={1}>3</option>
                        <option value={1}>4</option>
                        <option value={2}>5</option>
                      </select>
                      <span>01</span>
                    </div>
                    <p className="ps-product__price sale">$32.99 <del>$41.00 </del></p>
                  </div>
                  <div className="ps-product__content hover">
                    <a className="ps-product__title" href="product-default.html">Grand Slam Indoor Of Show Jumping Novel</a>
                    <p className="ps-product__price sale">$32.99 <del>$41.00 </del></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 ">
              <div className="ps-product">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html"><img src="https://picsum.photos/200/300" alt /></a>
                  <div className="ps-product__badge">-5%</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Leer Más"><i className="icon-bag2" /></a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Vista Rapida">
                        <i className="icon-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Agregar a las Lista Deseos">
                        <i className="icon-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                        <i className="icon-chart-bars" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <a className="ps-product__vendor" href="#">Tienda Juvenil</a>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="product-default.html">Sound Intone I65 Earphone White Version</a>
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value={1}>1</option>
                        <option value={1}>2</option>
                        <option value={1}>3</option>
                        <option value={1}>4</option>
                        <option value={2}>5</option>
                      </select>
                      <span>01</span>
                    </div>
                    <p className="ps-product__price sale">$100.99 <del>$106.00 </del></p>
                  </div>
                  <div className="ps-product__content hover">
                    <a className="ps-product__title" href="product-default.html">Sound Intone I65 Earphone White Version</a>
                    <p className="ps-product__price sale">$100.99 <del>$106.00 </del></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 ">
              <div className="ps-product">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html">
                    <img src="https://picsum.photos/200/300" alt />
                  </a>
                  <div className="ps-product__badge">-16%</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Leer Más">
                        <i className="icon-bag2" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Vista Rapida">
                        <i className="icon-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Agregar a la Lista Deseos">
                        <i className="icon-heart" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <a className="ps-product__vendor" href="#">Tienda Juvenil/a&gt;
                  </a><div className="ps-product__content"><a className="ps-product__vendor" href="#">
                    </a><a className="ps-product__title" href="product-default.html">Sofá largo de tela de Corea en color azul marino</a>
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value={1}>1</option>
                        <option value={1}>2</option>
                        <option value={1}>3</option>
                        <option value={1}>4</option>
                        <option value={2}>5</option>
                      </select>
                      <span>01</span>
                    </div>
                    <p className="ps-product__price sale">$567.89 <del>$670.20 </del></p>
                  </div>
                  <div className="ps-product__content hover">
                    <a className="ps-product__title" href="product-default.html">Sofá largo de tela de Corea en color azul marino</a>
                    <p className="ps-product__price sale">$567.89 <del>$670.20 </del></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 ">
              <div className="ps-product">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html">
                    <img src="https://picsum.photos/200/300" alt />
                  </a>
                  <div className="ps-product__badge">-16%</div>
                  <ul className="ps-product__actions">
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Leer Más">
                        <i className="icon-bag2" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Vista Rapida">
                        <i className="icon-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Agregar a las Lista Deseos">
                        <i className="icon-heart" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <a className="ps-product__vendor" href="#">Tienda Juvenil</a>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="product-default.html">Unero Military Classical Backpack</a>
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value={1}>1</option>
                        <option value={1}>2</option>
                        <option value={1}>3</option>
                        <option value={1}>4</option>
                        <option value={2}>5</option>
                      </select>
                      <span>02</span>
                    </div>
                    <p className="ps-product__price sale">$35.89 <del>$42.20 </del></p>
                  </div>
                  <div className="ps-product__content hover">
                    <a className="ps-product__title" href="product-default.html">Unero Military Classical Backpack</a>
                    <p className="ps-product__price sale">$35.89 <del>$42.20 </del></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="ps-product">
                <div className="ps-product__thumbnail">
                  <a href="product-default.html">
                    <img src="https://picsum.photos/200/300" alt />
                  </a>
                  <ul className="ps-product__actions">
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Leer Más">
                        <i className="icon-bag2" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Vista Rápida">
                        <i className="icon-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Agregar a la Lista Deseos">
                        <i className="icon-heart" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ps-product__container">
                  <a className="ps-product__vendor" href="#">Tienda Juvenil</a>
                  <div className="ps-product__content">
                    <a className="ps-product__title" href="product-default.html">Rayban Rounded Sunglass Brown Color</a>
                    <div className="ps-product__rating">
                      <select className="ps-rating" data-read-only="true">
                        <option value={1}>1</option>
                        <option value={1}>2</option>
                        <option value={1}>3</option>
                        <option value={1}>4</option>
                        <option value={2}>5</option>
                      </select>
                      <span>02</span>
                    </div>
                    <p className="ps-product__price">$35.89</p>
                  </div>
                  <div className="ps-product__content hover">
                    <a className="ps-product__title" href="product-default.html">Rayban Rounded Sunglass Brown Color</a>
                    <p className="ps-product__price">$35.89</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{/*  End Customers who bought */}
      {/*=====================================
			Related products
			======================================*/} 
   
    </div>
  </div>{/* End Product Content */}
  </>
  );
	}