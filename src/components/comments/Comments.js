import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import CommentsList from './CommentsList';

const Comments = (props) => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments, true)

  const params = useParams();
  const { quoteID } = params

  useEffect(() => {
    sendRequest(quoteID)
  }, [sendRequest, quoteID])

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => { 
    sendRequest(quoteID)
  },[sendRequest, quoteID]);

  let comments;

  if (status === 'pending') {
    comments = <div className='centered'><LoadingSpinner /></div>
  }

  if (status === 'completed' && (loadedComments || loadedComments.length > 0)) {
    comments = <CommentsList comments={loadedComments} />
  }

  if (status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
    comments = <p className='centered'>No Comments were Added</p>
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment &&
        <NewCommentForm
          onAddedComment={addedCommentHandler}
          quoteId={quoteID} />}
      {comments}
    </section>
  );
};

export default Comments;
