import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from '../components/LoadingScreen';
import { Toaster } from 'react-hot-toast';
import { Layout } from '../components/Layout';
import { Container } from '../components/Container';
import { Home } from '../sections/Home';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>
      {!isLoading && (
        <Layout>
          <Toaster
            position="bottom-left"
            toastOptions={{
              duration: 4000,
              success: {
                iconTheme: {
                  primary: 'var(--green)',
                  secondary: 'var(--white)'
                }
              },
              error: {
                iconTheme: { primary: 'var(--red)', secondary: 'var(--white)' },
                style: {
                  color: 'var(--red)'
                }
              },
              style: {
                padding: '1rem',
                borderRadius: '0px',
                backgroundColor: 'var(--white)'
              }
            }}
          />
          <Container>
            <Home />
          </Container>
        </Layout>
      )}
    </>
  );
}
