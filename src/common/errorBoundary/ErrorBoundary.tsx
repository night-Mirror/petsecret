/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */
import { Alert } from 'antd';
import * as React from 'react';
interface ErrorBoundaryProps {
    message?: React.ReactNode;
    description?: React.ReactNode;
    children?: React.ReactNode;
    history?: any
}

export default class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    {
        error?: Error | null;
        info: {
            componentStack?: string;
        };
    }
> {
    state = {
        error: undefined,
        info: {
            componentStack: '',
        },
    };
    shouldComponentUpdate(nextProps: { history: any; }) {
        let nextPathName = nextProps.history.pathname
        let oldPathName = this.props.history.pathname
        if (nextPathName != oldPathName) {
            this.setState({
                error: undefined,
                info: {
                    componentStack: '',
                },
            })
        } return true

    }
    componentDidCatch(error: Error | null, info: object) {
        this.setState({ error, info });
    }

    render() {
        const { message, description, children, } = this.props;
        const { error, info } = this.state;
        const componentStack = info && info.componentStack ? info.componentStack : null;
        const errorMessage = typeof message === 'undefined' ? (error || '').toString() : message;
        const errorDescription = typeof description === 'undefined' ? componentStack : description;
        if (error) {
            return (
                <Alert type="error" message={errorMessage} description={<pre>{errorDescription}</pre>} />
            );
        }
        return children;
    }
}