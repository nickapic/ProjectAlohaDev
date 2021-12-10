import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addComment } from '../actions/job'
import { Textarea } from '@chakra-ui/textarea'
import { Button } from '@chakra-ui/button'

const CommentForm = ({ jobId, addComment}) => {
    const [text, setText] = useState('');
    return (
        <div className="comment-field">
        <form className="job-post-form" onSubmit={e => {
                e.preventDefault();
                addComment(jobId,{text});
                setText("");
            }}>
            <Textarea
                name="description"
                cols="30"
                rows="5"
                placeholder="Add a Comment"
                value={text}
                required
                onChange={e => setText(e.target.value)}
                ></Textarea>
                <Button type="submit"colorScheme="teal" className="form-input-btn" value="Submit"> Submit </Button>

            </form>
        </div>
    )
}

CommentForm.propTypes = {

}

export default connect(null,{addComment })(CommentForm);
