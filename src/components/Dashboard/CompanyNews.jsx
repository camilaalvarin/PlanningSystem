import React from 'react';
import styles from './CompanyNews.module.scss'

const CompanyNews = () => {
    return (
        <div className={styles.father}>
            <div className={styles.boxCompany}>
                <h3 className={styles.titleCompany}>Company News</h3>
            </div>

            <div className={styles.articlesAndScroll}>
                <div className={styles.articles}>

                    <div className={styles.article}>
                        <div className={styles.boxTitleArticle}>
                            <h4 className={styles.titleArticle}>Announcement title #1</h4>
                            <h5 className={styles.subtitleArticle}>Thursday, October 2</h5>
                        </div>
                        <p className={styles.textArticle}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate... 
                            <button>
                                (More)
                            </button>
                        </p>
                    </div>

                    <div className={styles.article}>
                        <div className={styles.boxTitleArticle}>
                            <h4 className={styles.titleArticle}>Announcement title #2</h4>
                            <h5 className={styles.subtitleArticle}>Thursday, October 2</h5>
                        </div>
                        <div className={styles.boxTitleArticle}>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate... 
                                <button>
                                    (More)
                                </button>
                            </p>
                            <img></img>
                        </div>
                    </div>

                    <div className={styles.article}>
                        <div className={styles.boxTitleArticle}>
                            <h4 className={styles.titleArticle}>Announcement title #3</h4>
                            <h5 className={styles.subtitleArticle}>Monday, April 30</h5>
                        </div>
                        <div className={styles.boxTitleArticle}>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate... 
                                <button>
                                    (More)
                                </button>
                            </p>
                            <img></img>
                        </div>
                    </div>

                </div>

                <div className={styles.scroll}>
                    scroll
                </div>
            </div>
        </div>
    );
}

export default CompanyNews;
