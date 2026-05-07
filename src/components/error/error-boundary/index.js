'use client';
import React from 'react';
import Fallback from './Fallback';

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReload = () => window.location.reload();
  handleReset = () => this.setState({ hasError: false, error: null });

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <Fallback
        error={this.state.error}
        onReset={this.handleReset}
        onReload={this.handleReload}
      />
    );
  }
}

export default ErrorBoundary;
