
import ToyRobot from '../../src/services/toyRobot';

describe('Tests for the getCommandsFromFile function', () => {

  test('Should return all the commands from the given file', () => {

    //Arrange
    const toyRobot = new ToyRobot();

    //Act
    const RESULT =  toyRobot.GetActionMap();

    //Assert
    expect(Object.keys(RESULT)).toContain('left');
  });

})
