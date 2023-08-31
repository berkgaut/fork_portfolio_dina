import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from '../data/animations.json';
import Spinner from 'react-bootstrap/Spinner';

const Animation = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleClick = (project) => {
    if (project) {
      navigate(`/animation/${project.id}`, { state: { project} });
    }
  }

  return (
      <Container className='mt-5'>
      {isLoading ? (
        <Spinner animation='border' variant='secondary' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      ) : (
          <Row className='mb-4 justify-content-center'>
            {data.map(project => (
              <Col key={project.id} xs={11} sm={12} md={8} lg={6} xl={6} xxl={4} className='px-1 py-2 justify-content-center'>
                <div
                  style={{ 
                    height: '300px', 
                    overflow: 'hidden', 
                    position: 'relative', 
                  }}
                  onClick={() => handleClick(project) }
                >
                  <Image
                    src={`https://d2nc74wuj3tc6t.cloudfront.net/media/1/images/animation-page/${project.source}`}
                    fluid
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      cursor: 'pointer',
                    }}
                  />
                </div>
                {project.alt && (
                  <h5 style={{ fontFamily: 'Oswald-Light', textAlign: 'center', marginTop: '5px' }}>{project.alt}</h5>
                )}
              </Col>
            ))}
          </Row>
        )}  
      </Container>
  );
}

export default Animation;