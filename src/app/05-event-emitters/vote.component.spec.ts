import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {

    let component: VoteComponent;

    beforeEach(() => {
        component = new VoteComponent();
    });

    it('should raise voteChanged event when upvoted', () => {

        // Arrange
        let totalVotes = null;
        component.voteChanged.subscribe(t => totalVotes = t);

        // Act
        component.upVote();

        // Assert
        expect(totalVotes).toBe(1);

    });
});
