import React from 'react';
import { connect } from 'react-redux';
import { IN_PROGRESS } from '../constants/status-types';
import LoginModal from '../components/login-modal';
import TopBar from '../components/top-bar';
import FlashMessage from '../components/flash-message';
import ContentsViewer from '../components/contents-viewer';
import FileEditor from '../components/file-editor';
import SaveBar from '../components/save-bar';
import PromptBar from '../components/prompt-bar';
import ConfirmBar from '../components/confirm-bar';

class App extends React.Component {
  render() {
    return (
      this.props.status.type === IN_PROGRESS ? <div className='loader' /> :
      !this.props.loggedIn ? <LoginModal /> :
        <main>
          <article>
            <header>
              <TopBar />
              <FlashMessage status={this.props.status} />
            </header>
            <ContentsViewer />
            <FileEditor />
          </article>
          <footer style={styles.footer}>
            <SaveBar />
            <PromptBar />
            <ConfirmBar />
          </footer>
        </main>
    );
  }
}

const styles = {
  footer: {
    position: 'fixed',
    bottom: '0',
    width: '100%'
  }
}

function mapStateToProps({ status, loggedIn }) {
  return { status, loggedIn };
}

export default connect(mapStateToProps, null)(App);
