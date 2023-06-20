import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function WhoCanEnter() {
    const { t } = useTranslation(["who-can-enter"]);

    return (
        <section className="relative bg-black-100">
            {/*   
                Use the page content here, you only need to copy {t("<the content>")}:

                Who can enter: {t("whoCanEnter")}
                Description: {t("description")}
            */}

        </section>
    )
}

export default WhoCanEnter;
