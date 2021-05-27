import { useEffect } from "react";
import { Route, useParams, Link , useRouteMatch } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from '../hooks/use-http';
import {getSingleQuote} from '../lib/api';

const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();

    const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true)

    const {quoteId} = params

    useEffect (()=> {
      sendRequest(quoteId);
    }, [sendRequest, quoteId])

    if(status === 'pending') {
      return (
          <div className='centered'>
              <LoadingSpinner />
          </div>
      );
  }

  if(error) {
      return (
          <div className='centered focused'>
              {error}
          </div>
      );
  }

    // const quote = loadedQuote.find(quote => quote.id === params.quoteId)

    
    if(!loadedQuote.text){
      return <NoQuotesFound />
    }

    return (
        <>
        <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}/>
        <Route path={`/quotes/${params.quoteId}`} exact>
          <div className='centered'>
            <Link className='btn--flat' to={`${match.url}/comments`}> Comments </Link>
          </div>
        </Route>        
        <Route path={`${match.path}/comments`} exact>
          <Comments />
        </Route>
        </>
    );
};

export default QuoteDetail;
