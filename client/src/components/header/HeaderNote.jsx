import { TypeAnimation } from 'react-type-animation';
 
 const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        'Use of Google Voice after purchase is at your own risk ', // Types 'One'
        1000, // Waits 1s
        ' The authorities are not responsible for any damage to your account ', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        ' Please use your account wisely and safely ', // Types 'Three' without deleting 'Two'
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
  );
};

export default ExampleComponent;