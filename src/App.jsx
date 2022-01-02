import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {Grid, Paper, styled} from "@mui/material";

import './style/App.scss';
import {CardAvatar} from "./component/CardAvatar";

import profilePic from "./assets/img/profile_pic.jpg";
import {CardTitle} from "./component/CardTitle";


const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2, padding: theme.spacing(10), color: theme.palette.text.secondary,
}));

const App = () => {
    return (<Grid
        id="root-container"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
    >
        <Grid item md={8} xs={12}>
            <Item>
                <Grid
                    container
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                >
                    <CardAvatar
                        alt="Mehmet Arif Emre Şen"
                        src="https://avatars2.githubusercontent.com/u/17517090?s=460&u=a0e442b6913f827d2e51e00abe143b2dbc375f33&v=4"
                        size={{width: 130, height: 130}}
                    />
                    <CardTitle
                        name={"Mehmet Arif Emre Şen"}
                        nickname={"maemresen"}
                    />
                    <CardAvatar
                        alt="Mehmet Arif Emre Şen"
                        src={profilePic}
                        size={{width: 130, height: 130}}
                    />
                </Grid>


            </Item>

        </Grid>
    </Grid>);
}

export default App;
