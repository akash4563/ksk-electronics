import React from 'react'
import  CoursesDetails  from '../CoursesDetails';
import Grid from '@material-ui/core/Grid';

const Course = () => {
    console.log("cards")
    const [course, ] = React.useState([
        {
            _id: '0',
            course_name: 'Python Programming',
            code: 'KLP',
            unit: 'CS unit',
            short_description: 'A intro Python Course',
            long_description: 'The Add button only needs to modify categoryArray, then the changed data in this.state will trigger the render method. Also, the newly-added category has its name as null so that ReactJS will render a new blank editable input box.',
            price: 'Rs. 200'
          },
          {
            _id: '1',
            course_name: 'C++ Advance',
            code: 'CMSA',
            unit: 'IT Department',
            short_description: 'A advanced intro to C++',
            long_description: 'The Add button only needs to modify categoryArray, then the changed data in this.state will trigger the render method. Also, the newly-added category has its name as null so that ReactJS will render a new blank editable input box.',
            price: 'Rs. 800'
          },
          {
            _id: '2',
            course_name: 'SEO Pro',
            code: 'DSR',
            unit: 'Google Analytics',
            short_description: 'A tutorial to master SEO',
            long_description: 'The Add button only needs to modify categoryArray, then the changed data in this.state will trigger the render method. Also, the newly-added category has its name as null so that ReactJS will render a new blank editable input box.',
            price: 'Rs. 800'
          },
          {
            _id: '3',
            course_name: 'Chiral Center',
            code: 'CDQ',
            unit: 'CE Department',
            short_description: 'Intro to Chirality',
            long_description: 'The Add button only needs to modify categoryArray, then the changed data in this.state will trigger the render method. Also, the newly-added category has its name as null so that ReactJS will render a new blank editable input box.',
            price: 'Rs. 1200'
          },
          {
            _id: '4',
            course_name: 'web dev',
            code: 'CDU',
            unit: 'react js',
            short_description: 'Intro to Chirality',
            long_description: 'The Add button only needs to modify categoryArray, then the changed data in this.state will trigger the render method. Also, the newly-added category has its name as null so that ReactJS will render a new blank editable input box.',
            price: 'Rs. 900'
          },
    ])
    return (
        <div className="fac-cont">
                {course.map((eachCourses, index) =>
                        <CoursesDetails eachCourses={eachCourses}/>           
                )}
        </div>
    )
}

export default Course;