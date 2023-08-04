import {useNavigate} from 'react-router-dom';

import {BackgroundImage, Body, DirectoryItemContainer,} from './directory-item.styles';

const DirectoryItem = ({category}) => {
    const {image, name, route} = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={image}/>
            <Body>
                <h2>{name}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
