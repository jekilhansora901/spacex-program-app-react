import React from 'react'
import '../styles/Filters.css'
const Filters = (props) => {
    return(
        <div>
            <div className="title">Filters</div>
            <div className="filter_container">
                <div className="filter_year_title">Launch Year</div>
                {props.filterYears && props.filterYears.map((year, index) => (
                    <div className="col_filter">
                        <div key={index} className={`${'year'} ${(props.activeFilter?.year === year) ? 'active_filter' : ''}`} onClick={props.handleChange.bind(this, {year})}>
                            {year}
                        </div>
                    </div>
                ))}
            </div>
            <div className="filter_container">
                <div className="filter_year_title">Successful Launch</div>
                    {props.filterLaunch && props.filterLaunch.map((launch, index) => (
                        <div className="col_filter">
                            <div key={index} className={`${'year'} ${(props.activeFilter?.launch === launch.value) ? 'active_filter' : ''}`} onClick={props.handleChange.bind(this, {launch:launch.value})}>
                                {launch.id}
                            </div>
                        </div>
                    ))}
            </div>
            <div className="filter_container">
                <div className="filter_year_title">Successful Landing</div>
                {props.filterLanding && props.filterLanding.map((landing, index) => (
                    <div className="col_filter">
                        <div key={index} className={`${'year'} ${(props.activeFilter?.landing === landing.value) ? 'active_filter' : ''}`} onClick={props.handleChange.bind(this, {landing:landing.value})}>
                            {landing.id}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Filters;