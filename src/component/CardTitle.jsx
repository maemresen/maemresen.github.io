import {Typography} from "@mui/material";
import PropTypes from "prop-types";

export const CardTitle = ({name, nickname}) => {
    const nicknameExists = !!nickname;
    return (
        <div>
            <Typography variant="h2" component="div" gutterBottom textAlign={"center"}>
                {name}
            </Typography>

            {nicknameExists && (
                <Typography variant="h3" component="div" gutterBottom textAlign={"center"}>
                    a.k.a. {nickname}
                </Typography>
            )}

            <FontAwesomeIco icon={["fab", "github"]} />

        </div>
    )
};

CardTitle.propTypes = {
    name: PropTypes.string.isRequired, nickname: PropTypes.string,
}