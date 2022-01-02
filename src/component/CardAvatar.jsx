import PropTypes from 'prop-types';


import {Avatar, Box} from "@mui/material";

export const CardAvatar = ({src, size = {width: 130, height: 130}, alt = "not found"}) => (
    <Box sx={{display: {xs: 'none', lg: 'block'}}}>
        <Avatar
            alt={alt}
            src={src}
            sx={size}
        />
    </Box>
);

CardAvatar.propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.shape({
        width: PropTypes.number,
        height: PropTypes.number
    })
}