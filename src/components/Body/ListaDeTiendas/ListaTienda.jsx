import React from "react";
import './tienda.css'
import perfil from './img/3.jpg'
import back from './img/1.jpg'

export function ListaTienda(){


    return(
        <>
        
     <section className="ps-store-list">
  <div className="container">
    <div className="ps-section__header">
      <h3>Lista de Tiendas</h3>
    </div>
    <div className="ps-section__wrapper" data-select2-id={14}>
      <div className="ps-section__center" data-select2-id={33}>
        <section className="ps-store-box" data-select2-id={32}>
          <div className="ps-section__header">
            <p>Mostrando 1 -8 de 22 resultados</p>
            <form className="form-inline" action="/action">
              <label htmlFor="search pr-3">Buscar: </label>
              <input type="search" className="ml-3" id="search" placeholder="Input here..." />
            </form>
            <select className="ps-select">
              <option value={1}>Ordenar por Más nuevo: desde antiguo hasta noticias</option>
              <option value={2}>Ordenar por Más nuevo: Nuevo a viejo</option>
              <option value={3}>Ordenar por calificación promedio: de menor a mayor</option>
            </select>
          </div>
          <div className="ps-section__content">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <article className="ps-block--store">
                  <div className="ps-block__thumbnail bg--cover" style={{ backgroundImage: `url(${back})` }}  />
                  <div className="ps-block__content">
                    <div className="ps-block__author">
                      <a className="ps-block__user" href="#">
                      <img src={perfil} alt="Store" className="ps-block__thumbnail" /></a><a className="ps-btn" href="#">Visita la
                        tienda</a>
                    </div><br /><br /><br /><br />
                    <h4>GoPro</h4>
                    <div className="br-wrapper br-theme-fontawesome-stars">
                      <select className="ps-rating" data-read-only="true" style={{display: 'none'}}>
                        <option value={1}>1</option>
                        <option value={1}>2</option>
                        <option value={1}>3</option>
                        <option value={1}>4</option>
                        <option value={2}>5</option>
                      </select>
                    </div>
                    <p>325 Orchard, Buenos Aires, Formosa Argentina</p>
                    <ul className="ps-block__contact">
                      <li>
                        <i className="icon-envelope"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg></i>
                        <a href="mailto:contact@xhome.com">contact@xhome.com</a>
                      </li>
                      <li>
                      <i className="icon-envelope"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg></i>
                        
                       (+093) 77-637-3300
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <article className="ps-block--store">
                  <div className="ps-block__thumbnail bg--cover"style={{ backgroundImage: `url(${back})` }}  />
                  <div className="ps-block__content">
                    <div className="ps-block__author"><a className="ps-block__user" href="#"> <img src={perfil} alt="Store" className="ps-block__thumbnail" /></a><a className="ps-btn" href="#">Visita la tienda</a>
                    </div><br /><br /><br /><br />
                    <h4>Robert's Store</h4>
                    <div className="br-wrapper br-theme-fontawesome-stars"><select className="ps-rating" data-read-only="true" style={{display: 'none'}}>
                        <option value={1}>1</option>
                        <option value={1}>2</option>
                        <option value={1}>3</option>
                        <option value={1}>4</option>
                        <option value={2}>5</option>
                      </select></div>
                    <p>325 Orchard, Buenos Aires, Formosa Argentina</p>
                    <ul className="ps-block__contact">
                    <li>
                        <i className="icon-envelope"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg></i>
                        <a href="mailto:contact@xhome.com">contact@xhome.com</a>
                      </li>
                      <li>
                      <i className="icon-envelope"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg></i>
                       (+093) 77-637-3300
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <article className="ps-block--store">
                  <div className="ps-block__thumbnail bg--cover"style={{ backgroundImage: `url(${back})` }}  />
                  <div className="ps-block__content">
                    <div className="ps-block__author"><a className="ps-block__user" href="#"> <img src={perfil} alt="Store" className="ps-block__thumbnail" /></a><a className="ps-btn" href="#">Visita la tienda</a>
                    </div><br /><br /><br /><br />
                    <h4>Youngshop</h4>
                    <div className="br-wrapper br-theme-fontawesome-stars"><select className="ps-rating" data-read-only="true" style={{display: 'none'}}>
                        <option value={1}>1</option>
                        <option value={1}>2</option>
                        <option value={1}>3</option>
                        <option value={1}>4</option>
                        <option value={2}>5</option>
                      </select></div>
                    <p>325 Orchard, Buenos Aires, Formosa Argentina</p>
                    <ul className="ps-block__contact">
                    <li>
                        <i className="icon-envelope"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg></i>
                        <a href="mailto:contact@xhome.com">contact@xhome.com</a>
                      </li>
                      <li>
                      <i className="icon-envelope"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg></i>
                        (+093) 77-637-3300
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <article className="ps-block--store">
                  <div className="ps-block__thumbnail bg--cover" style={{ backgroundImage: `url(${back})` }} />
                  <div className="ps-block__content">
                    <div className="ps-block__author"><a className="ps-block__user" href="#"> <img src={perfil} alt="Store" className="ps-block__thumbnail" /></a><a className="ps-btn" href="#">Visita la tienda</a>
                    </div><br /><br /><br /><br />
                    <h4>Global Offical</h4>
                    <div className="br-wrapper br-theme-fontawesome-stars"><select className="ps-rating" data-read-only="true" style={{display: 'none'}}>
                        <option value={1}>1</option>
                        <option value={1}>2</option>
                        <option value={1}>3</option>
                        <option value={1}>4</option>
                        <option value={2}>5</option>
                      </select></div>
                    <p>325 Orchard, Buenos Aires, Formosa Argentina</p>
                    <ul className="ps-block__contact">
                    <li>
                        <i className="icon-envelope"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg></i>
                        <a href="mailto:contact@xhome.com">contact@xhome.com</a>
                      </li>
                      <li>
                      <i className="icon-envelope"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg></i>
                       (+093) 77-637-3300
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
            </div><br />
            <div className="ps-pagination">
              <ul className="pagination">
                <li className="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">Pagina siguiente<i className="icon-chevron-right" /></a></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</section>

        
        
        
        
        
        
        
        
        
        
        </>
    );
}