import { padding } from "@mui/system";

const ErrorMessage = ({children}) => {
    return(
        <div 
        style={{
            width: "100%",
            padding: 10,
            marginBottom: 10,
            borderRadius: 4,
            textAlign: "center",
            backgroundColor: "orangered",
            color: "white",
            textTransform: "capitalize"
        }}>
            {children}
        </div>
    );
};

export default ErrorMessage;