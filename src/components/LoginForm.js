import React, { Component } from 'react'
import { Text } from 'react-native'
import { Card, CardSection, Input, Button, Spinner } from './common'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions'

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }

    onButtonPress() {
        const { email, password } = this.props
        this.props.loginUser({ email, password })
    }

    renderButton() {
        if(this.props.loading) {
            return <Spinner size="large" />
        }

        return(
            <Button 
                onPress={this.onButtonPress.bind(this)}
                >
                    Login
            </Button>
        )
    }

    render() {
        return (
        <Card>
            <CardSection>
                <Input 
                    placeHolder="john@example.com"
                    label="Email"
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                />
            </CardSection>

            <CardSection>
                <Input
                    secureTextEntry 
                    placeHolder="Password"
                    label="password"
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                />
            </CardSection>

            <Text 
            style={{ fontSize: 20, alignSelf: 'center', color: 'red' }}
            >
                {this.props.error}
            </Text>

            <CardSection>
                {this.renderButton()}
            </CardSection>
            
        </Card>
        )
    }
}

// example destructing
// const mapStateToProps = ({auth}) => {
//     const { email, password, error } = auth
//     return { email, password, error}
// }

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm)