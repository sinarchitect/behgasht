import React from 'react';
import Styles from "./index.module.css"
const MiddleBadge = () => {
    return ( <div>
        {/* styles badesh . badesh esme class */}
        {/* className faramoosh nashe */}
        <span className={Styles.Asghar}>awdhauwgdkuagwkduakwudghkagwdukagwkudgakwd</span>
        <span className={`${Styles.Asghar} my-2 text-center`}>awdhauwgdkuagwkduakwudghkagwdukagwkudgakwd</span>
    </div> );
}
 
export default MiddleBadge;