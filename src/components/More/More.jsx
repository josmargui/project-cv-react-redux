

const More = ({ languages }) => {
    //console.log(languages);
    return (
        <div>
            <p>
                {languages.language}
            </p>
            <p>
                {languages.wrlevel}
            </p>
            <p>
                {languages.splevel}
            </p>
        </div>
    );
}
export default More;