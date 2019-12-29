import React, {Component} from 'react';
import {Image, Segment, Header, Divider, Grid, Button, Card} from 'semantic-ui-react';
import MyDropzone from './dropPhoto';
class PhotosPage extends Component {
    render() {
        return (
            <Segment>
                <Header dividing size='large' content='Your Photos' />
                <Grid.Row>
                    <Grid.Row width={4}>
                        <Header color='purple' sub content='Step 1 - Add Photo'/>
                        <MyDropzone />
                    </Grid.Row>
                    <Divider/>
                    <Grid.Row width={1} />
                    <Grid.Row width={4}>
                        <Header sub color='purple' content='Step 2 - Resize image' />
                    </Grid.Row>
                    <Divider/>
                    <Grid.Row width={1} />
                    <Grid.Row width={4}>
                        <Header sub color='purple' content='Step 3 - Preview and Upload' />
                    </Grid.Row>
                </Grid.Row>

                <Divider/>
                <Header sub color='purple' content='All Photos'/>

                <Card.Group itemsPerRow={5}>
                    <Card color='purple'>
                        <Image class="ui medium circular image" src='https://avatars1.githubusercontent.com/u/53024934?s=400&u=6684d46467fa56968ac0616196cea1ee338302b0&v=4'/>
                        <Button color='purple'>Main Photo</Button>
                    </Card>

                        <Card color='purple'>
                            <Image
                                src='https://avatars1.githubusercontent.com/u/53024934?s=400&u=6684d46467fa56968ac0616196cea1ee338302b0&v=4'
                            />
                            <div className='ui two buttons'>
                                <Button basic color='purple'>Main</Button>
                                <Button basic icon='trash' color='red' />
                            </div>
                        </Card>
                </Card.Group>
            </Segment>
        );
    }
}
export default PhotosPage;