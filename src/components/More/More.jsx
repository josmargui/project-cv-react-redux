

const More = ({ languages }) => {
    //console.log(languages);
    return (
        <div>
            <h2>Idiomas</h2>
                <p>
                    {languages.language}
                </p>
                <p>
                    {languages.level}
                </p>
        </div>
    );
}
export default More;