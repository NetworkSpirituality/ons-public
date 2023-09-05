import React, { useState, useEffect } from 'react';
import './../assets/scss/ConsoleWindow.scss';
import { Text } from '@arwes/react-text';
import { Animator } from '@arwes/react-animator';
import { Animated } from '@arwes/react-animated';
import { FrameSVGAssemblingAnimation } from '@arwes/react-frames';

type ConsoleProps = {
    messages: string[];
};

const ConsoleWindow: React.FC<ConsoleProps> = ({ messages }) => {
    return (
        <div className="consoleWindow">
            {messages.map((message, index) => (
                <div key={index} className="consoleMessage">
                        <Text style={{ color: '#ddd', fontFamily: 'monospace' }}>
                            {message}
                        </Text>
                </div>
            ))}
        </div>
    );
};

export default ConsoleWindow;