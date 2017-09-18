import { VoteComponent } from './vote.component';

describe('Vote Component', () => {

    let voteComponent : VoteComponent;

    beforeEach(() => {
        // arange
       voteComponent = new VoteComponent();
    });

    afterEach(() => {

    });

    it('should increment totalVotes when upvoted', () => {

        // act
        voteComponent.upVote();
        // assert
        expect(voteComponent.totalVotes).toBe(1);
    });

    it('should decrement totalVotes when downvoted', () => {

        // act
        voteComponent.downVote();
        // assert
        expect(voteComponent.totalVotes).toBe(-1);
    });


});
