import React from 'react';
import "../styles/Course.css";
import Grid from '@material-ui/core/Grid';

const CoursesDetails = ({ eachCourses }) => {
    const { course_name, long_description, short_description, code, price } = eachCourses;
    function handleClick() {
        console.log('button click');
      }
    return (
        <div className="col s12 m7">
        <div className={course_name} style={{ paddingLeft: '20px ',marginBottom:'1rem' }}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <div className="featcard mt-4">
                  <div className="image-data">
                    <div className="background-image"></div>
                    <div className="publication-details">
                      <p className="description">{long_description}</p>
                    </div>
                  </div>
                  <div className="post-data">
                    <h1 className="title">{course_name}</h1>
                    <h2 className="subtitle">{short_description}</h2>
                    <h2 className="subtitle">CODE:  {code}</h2>
                    <button  className="btn-featbuy">Buy now</button>
                    <div className="vc mt-4" style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
                      <div className="price">
                        <h2 className="new-price">{price}</h2>
                      </div>
                      <div className="cta">
                        <a href="#">Read more &rarr;</a>
                      </div>

                    </div>
                  </div>
  
                </div>
  
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    )
}

export default CoursesDetails;