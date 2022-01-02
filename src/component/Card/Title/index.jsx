import {Box, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faGitlab, faMedium} from "@fortawesome/free-brands-svg-icons";

export const _Title = ({name, nickname}) => {
    const iconSize = "3x";
    const nicknameExists = !!nickname;
    return (
        <div>
            <Typography variant="h2" component="div" gutterBottom textAlign={"center"}>
                {name}
            </Typography>

            {nicknameExists && (
                <Typography variant="h4" component="div" gutterBottom textAlign={"center"}>
                    (a.k.a. {nickname})
                </Typography>
            )}

            <Box
                marginTop={5}
                display={"flex"}
                justifyContent={"space-evenly"}
            >
                <FontAwesomeIcon icon={faGitlab} size={iconSize}/>
                <FontAwesomeIcon icon={faGithub} size={iconSize}/>
                <FontAwesomeIcon icon={faMedium} size={iconSize}/>
            </Box>
        </div>
    )
};

_Title.propTypes = {
    name: PropTypes.string.isRequired, nickname: PropTypes.string,
}