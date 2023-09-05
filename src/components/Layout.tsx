import React, { useState, useEffect, ReactElement, Fragment, useMemo } from 'react';
import { Global } from '@emotion/react';
import { createTheme } from '../theme/theme';

import { Animator } from '@arwes/react-animator';
import { Animated } from '@arwes/react-animated';
import { MovingLines, Dots, GridLines } from '@arwes/react-bgs';


import backgroundImage from "./../assets/img/setup.jpg";


interface LayoutProps {
    children: React.ReactNode;
}

const Item = (): ReactElement => {
    return (
        <div></div>
    );
  };
  

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [loading, setLoading] = useState(true);

    // Simulate an async operation (like data fetch)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 100);  // Hide loader after 2 seconds for demonstration

        return () => clearTimeout(timer);
    }, []);
    
    const theme = useMemo(() => {
        const themeExtensions = {
            outline: 3
        };
        return createTheme(themeExtensions);
    }, []);

    return (
        
        <Fragment>
            <Global styles={{
                html: {
                    margin: theme.space(2),
                    backgroundColor: theme.color.primary(1)
                },
                body: {
                    margin: 0
                },
                // Add any other global styles you need
            }} />

            {loading ? (
                <Animator active={loading} manager='stagger' combine>
                {Array(10).fill(0).map((_, i) => <Item key={i} />)}
                </Animator>
            ) : (
                <div className="layout-container">
                    <Animator duration={{ interval: 10 }}>
                        <div style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            backgroundColor: '#000906',
                            backgroundImage: `url(${backgroundImage})`,
                        }}>
                            <GridLines
                            lineColor='hsla(180, 100%, 75%, 0.05)'
                            distance={30}
                            />
                            {children}
                        </div>
                    </Animator>

                </div>
            )}
        </Fragment>
    );
};

export default Layout;
