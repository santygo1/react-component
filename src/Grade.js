import React, {useState} from 'react';

const Grade = () => {

    const [grades, setGrades] = useState([]);

    function addGrade(grade) {
        setGrades([...grades, grade]);
    }

    const median = grades.reduce((acc, grade) => acc + (grade / grades.length), 0);

    return (
        <div>
            <div>
                <span>Ср. оценка: </span>
                <span style={{fontWeight: "bold"}}>{median}</span>
            </div>

            <form>
                <label>
                    Оценка:{" "}
                    <input name={"grade"} type={"number"} min={1} max={10}/>
                </label>

                <input type={"button"}
                       value={"Отправить"}
                       onClick={(e) => addGrade(+e.target.form.grade.value)}/>
            </form>
        </div>
    );
};

export default Grade;