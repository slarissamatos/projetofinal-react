import "./styles.css";
const CaixaDeTexto = ({ label, placeholder }) => {
    return (
<div className="campo-texto">
            <label>{label}</label>
        <input placeholder= {placeholder}></input>
        </div>
    );
};
export default CaixaDeTexto;