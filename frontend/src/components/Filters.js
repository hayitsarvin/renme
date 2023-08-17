import React from 'react'
import "../styles/components/filters.css"
const Filters = ({mobile, setCategory, setPrice , price,category}) => {
    const [filtersOpen , setFiltersOpen] = React.useState(false)
    if(mobile.width <= 435){
        return (
            <div className='mobile-filter-div'>
                <div className='search-div'>
                    
                    <input type='text' placeholder='search' />
                </div>
                <div className='filters-btn-div' onClick={() => setFiltersOpen(true)}>
                    <img src='/icons/filter.svg' />
                    <p className='filter-btn-text'>filters</p>
                </div>
                <div className={'filters-list-div ' + (filtersOpen ? "filters-open" : "closed")}>
                    <div className='close-popup' onClick={() => setFiltersOpen(false)}>
                        <img src='/icons/close.svg' />
                    </div>
                <div className='single-filter-div '>
                    <div className='filter-name-div'>
                        <h4 className='filter-name' >categories</h4>
                        <img src='/icons/expand.svg' className='dropdown-icon' />
                    </div>
                    <div className='filter-value-list'>
                    <div className={category == "all" ? 'filter-categorie-value active' : 'filter-categorie-value '} onClick={() => setCategory("all")}>
                            {/* <img src='/icons/mobile.svg' className='categories-icon' /> */}
                            <p className='categorie-name'>all</p>
                        </div>
                        <div className='filter-categorie-value active' onClick={() => setCategory("mobile")}>
                            <img src='/icons/mobile.svg' className='categories-icon' />
                            <p className='categorie-name'>mobile</p>
                        </div>
                        <div className='filter-categorie-value' onClick={() => setCategory("laptop")}>
                            <img src='/icons/laptop.svg' className='categories-icon' />
                            <p className='categorie-name'>laptop</p>
                        </div>
                        <div className='filter-categorie-value' onClick={() => setCategory("accessory")}>
                            <img src='/icons/headphones.svg' className='categories-icon' />
                            <p className='categorie-name'>accessory</p>
                        </div>
                        <div className='filter-categorie-value' onClick={() => setCategory("car")}>
                            <img src='/icons/car.svg' className='categories-icon' />
                            <p className='categorie-name'>car</p>
                        </div>
                       
                    </div>
                </div>
                <div className='single-filter-div'>
                    <div className='filter-name-div'>
                        <h4 className='filter-name'>location</h4>
                        <img src='/icons/expand.svg' className='dropdown-icon' />
                    </div>
                  
                </div>
                <div className='single-filter-div'>
                    <div className='filter-name-div'>
                        <h4 className='filter-name'>price</h4>
                        <img src='/icons/expand.svg' className='dropdown-icon' />
                    </div>
                    {/* <select className='price-option' id="price-option" name="price-option" value={price} onChange={(e) => setPrice(e.target.value)}>
                                    <option value="all">all</option>
                                    <option value="hourly">hourly</option>
                                    <option value="daily">daily</option>
                                 
                                </select> */}
                  
                </div>
                <div className='single-filter-div'>
                    <div className='filter-name-div'>
                        <h4 className='filter-name'>availability</h4>
                        <img src='/icons/expand.svg' className='dropdown-icon' />
                    </div>
                  
                </div>
                <div className='single-filter-div'>
                    <div className='filter-name-div'>
                        <h4 className='filter-name'>sort</h4>
                        <img src='/icons/expand.svg' className='dropdown-icon' />
                    </div>
                  
                </div>
            </div>
            </div>
        )
    }else{
        return (
            <div className='filters-list-div'>
                <div className='single-filter-div'>
                    <div className='filter-name-div'>
                        <h4 className='filter-name'>categories</h4>
                        <img src='/icons/expand.svg' className='dropdown-icon' />
                    </div>
                    <div className='filter-value-list'>
                        <div className={category == "all" ? 'filter-categorie-value active' : 'filter-categorie-value '} onClick={() => setCategory("all")}>
                            {/* <img src='/icons/mobile.svg' className='categories-icon' /> */}
                            <p className='categorie-name'>all</p>
                        </div>
                        <div className={category == "mobile" ? 'filter-categorie-value active' : 'filter-categorie-value '} onClick={() => setCategory("mobile")}>
                            <img src='/icons/mobile.svg' className='categories-icon' />
                            <p className='categorie-name'>mobile</p>
                        </div>
                        <div className={category == "laptop" ? 'filter-categorie-value active' : 'filter-categorie-value '} onClick={() => setCategory("laptop")}>
                            <img src='/icons/laptop.svg' className='categories-icon' />
                            <p className='categorie-name'>laptop</p>
                        </div>
                        <div className={category == "accessory" ? 'filter-categorie-value active' : 'filter-categorie-value '} onClick={() => setCategory("accessory")}>
                            <img src='/icons/headphones.svg' className='categories-icon' />
                            <p className='categorie-name'>accessory</p>
                        </div>
                        <div className={category == "car" ? 'filter-categorie-value active' : 'filter-categorie-value '} onClick={() => setCategory("car")}>
                            <img src='/icons/car.svg' className='categories-icon' />
                            <p className='categorie-name'>car</p>
                        </div>
                       
                    </div>
                </div>
                <div className='single-filter-div'>
                    <div className='filter-name-div'>
                        <h4 className='filter-name'>location</h4>
                        <img src='/icons/expand.svg' className='dropdown-icon' />
                    </div>
                  
                </div>
                <div className='single-filter-div'>
                    <div className='filter-name-div'>
                        <h4 className='filter-name'>price</h4>
                        <img src='/icons/expand.svg' className='dropdown-icon' />
                    </div>
                    {/* <select className='price-option' id="price-option" name="price-option" value={price} onChange={(e) => setPrice(e.target.value)}>
                                    <option value="all">all</option>
                                    <option value="hourly">hourly</option>
                                    <option value="daily">daily</option>
                                 
                                </select> */}
                </div>
                <div className='single-filter-div'>
                    <div className='filter-name-div'>
                        <h4 className='filter-name'>availability</h4>
                        <img src='/icons/expand.svg' className='dropdown-icon' />
                    </div>
                  
                </div>
                <div className='single-filter-div'>
                    <div className='filter-name-div'>
                        <h4 className='filter-name'>sort</h4>
                        <img src='/icons/expand.svg' className='dropdown-icon' />
                    </div>
                  
                </div>
            </div>
          )
    }
  
}

export default Filters