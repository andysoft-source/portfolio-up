import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { useTheme } from '../../../contexts/ThemeContext';
import { useGroqChat } from '../../../hooks/useGroqChat';
import { HERO_CONTENT, CONTACT } from '../../../constants/constants';
import { PROJECTS } from '../../../constants/projects';
import { EXPERIENCES } from '../../../constants/experiences';
import { SKILLS_DATA, QUICK_STATS } from '../../../constants/skills';

function buildSystemPrompt() {
  const projectsText = PROJECTS.map(p =>
    `- ${p.title}: ${p.description.summary}`
  ).join('\n');

  const experiencesText = EXPERIENCES.map(e =>
    `${e.period} | ${e.role} @ ${e.company.name}\n  ${e.highlights.map(h => `- ${h}`).join('\n  ')}`
  ).join('\n\n');

  const skillsText = Object.entries(SKILLS_DATA).map(([category, data]) =>
    `${category}: ${data.skills.map(s => `${s.name} (level: ${s.level}%)`).join(', ')}`
  ).join('\n');

  return `You are an AI career assistant representing Hajun Kim (also known as JinHo Yun), a Full-Stack Developer & AI Engineer.

CORE IDENTITY:
- Name: ${HERO_CONTENT.name}
- Roles: ${HERO_CONTENT.roles.join(', ')}
- Summary: ${HERO_CONTENT.summary}
- Highlights: ${HERO_CONTENT.highlights.join(', ')}

CONTACT:
- Email: ${CONTACT.email}
- LinkedIn: ${CONTACT.socials.linkedin}
- GitHub: ${CONTACT.socials.github}
- Location: ${CONTACT.address || 'Not specified'}

QUICK STATS:
${QUICK_STATS.map(q => `- ${q.label}: ${q.value}`).join('\n')}

EXPERIENCE:
${experiencesText}

SKILLS:
${skillsText}

PROJECTS:
${projectsText}

RULES:
1. Answer as Hajun Kim's AI career representative — first-person perspective.
2. Be concise, professional, and friendly.
3. If asked something you don't know, say so honestly rather than making up information.
4. When discussing projects, provide specific details from the project descriptions above.
5. For technical questions, highlight relevant skills and experience.
6. Always maintain a helpful and enthusiastic tone about Hajun Kim's work.
7. Keep responses under 3 paragraphs when possible.`;
}

function ChatMessage({ message, currentTheme }) {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      {!isUser && (
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
          currentTheme === 'neon'
            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
            : currentTheme === 'minimal'
              ? 'bg-gray-200 text-gray-600'
              : currentTheme === 'corporate'
                ? 'bg-blue-100 text-blue-600'
                : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
        }`}>
          AI
        </div>
      )}
      <div
        className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? currentTheme === 'neon'
              ? 'bg-cyan-500/20 text-cyan-100 border border-cyan-500/30'
              : currentTheme === 'minimal'
                ? 'bg-gray-800 text-white'
                : currentTheme === 'corporate'
                  ? 'bg-blue-600 text-white'
                  : 'bg-purple-600 text-white'
            : currentTheme === 'minimal'
              ? 'bg-gray-100 text-gray-800'
              : currentTheme === 'corporate'
                ? 'bg-blue-50 text-blue-900 border border-blue-200'
                : 'bg-neutral-800 text-neutral-200 border border-neutral-700'
        }`}
      >
        {message.content}
      </div>
      {isUser && (
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
          currentTheme === 'neon'
            ? 'bg-cyan-500/30 text-cyan-200'
            : currentTheme === 'minimal'
              ? 'bg-gray-700 text-white'
              : currentTheme === 'corporate'
                ? 'bg-blue-500 text-white'
                : 'bg-purple-400 text-white'
        }`}>
          U
        </div>
      )}
    </motion.div>
  );
}

function TypingIndicator({ currentTheme }) {
  return (
    <div className="flex gap-3">
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
        currentTheme === 'neon'
          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
          : currentTheme === 'minimal'
            ? 'bg-gray-200 text-gray-600'
            : currentTheme === 'corporate'
              ? 'bg-blue-100 text-blue-600'
              : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
      }`}>
        AI
      </div>
      <div className={`px-4 py-3 rounded-2xl ${
        currentTheme === 'minimal'
          ? 'bg-gray-100'
          : currentTheme === 'corporate'
            ? 'bg-blue-50 border border-blue-200'
            : 'bg-neutral-800 border border-neutral-700'
      }`}>
        <div className="flex gap-1.5">
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
            className="w-2 h-2 rounded-full bg-current opacity-40"
          />
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
            className="w-2 h-2 rounded-full bg-current opacity-40"
          />
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
            className="w-2 h-2 rounded-full bg-current opacity-40"
          />
        </div>
      </div>
    </div>
  );
}

TypingIndicator.propTypes = {
  currentTheme: PropTypes.string.isRequired,
};

const CareerChatbot = () => {
  const { currentTheme } = useTheme();
  const [shouldLoadChat, setShouldLoadChat] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);

  const systemPrompt = buildSystemPrompt();
  const { messages, sendMessage, isLoading, error, clearMessages } = useGroqChat(systemPrompt);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages]);

  useEffect(() => {
    if (shouldLoadChat && chatContainerRef.current) {
      chatContainerRef.current.scrollTop = 0;
    }
  }, [shouldLoadChat]);

  const handleSubmit = async (e) => {
    e?.preventDefault();
    const text = inputValue.trim();
    if (!text || isLoading) return;
    setInputValue('');
    await sendMessage(text);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const getThemeStyles = () => {
    const themes = {
      default: {
        container: 'bg-white border-gray-200 shadow-lg',
        text: 'text-gray-900',
        loading: 'text-gray-600',
        accent: 'purple',
      },
      neon: {
        container: 'bg-gray-900 border-cyan-400 shadow-cyan-400/30',
        text: 'text-cyan-100',
        loading: 'text-cyan-300',
        accent: 'cyan',
      },
      minimal: {
        container: 'bg-gray-50 border-gray-300 shadow-md',
        text: 'text-gray-800',
        loading: 'text-gray-500',
        accent: 'gray',
      },
      corporate: {
        container: 'bg-blue-50 border-blue-200 shadow-blue-200/30',
        text: 'text-blue-900',
        loading: 'text-blue-600',
        accent: 'blue',
      },
    };
    return themes[currentTheme] || themes.default;
  };

  const themeStyles = getThemeStyles();

  const renderWelcome = () => (
    <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-8 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-5xl sm:text-6xl mb-4 sm:mb-6"
      >
        💼
      </motion.div>
      <motion.h4
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 ${themeStyles.text}`}
      >
        Ready to Chat About My Career?
      </motion.h4>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`text-xs sm:text-sm mb-6 max-w-xs sm:max-w-md leading-relaxed opacity-80 ${themeStyles.text}`}
      >
        This AI assistant knows all about my professional background, skills, and experience.
        Ask about my projects, career journey, or technical expertise!
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-md">
        {[
          { icon: '💼', text: 'Career Information' },
          { icon: '🛠️', text: 'Technical Skills' },
          { icon: '📊', text: 'Project Details' },
          { icon: '📞', text: 'Contact Assistance' },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            className={`flex items-center gap-3 p-3 rounded-lg backdrop-blur-sm transition-all duration-200 hover:scale-105 ${
              currentTheme === 'neon'
                ? 'bg-cyan-900/20 border border-cyan-800/30 hover:bg-cyan-900/30'
                : currentTheme === 'minimal'
                  ? 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                  : currentTheme === 'corporate'
                    ? 'bg-blue-50 border border-blue-200 hover:bg-blue-100'
                    : 'bg-purple-900/20 border border-purple-700/30 hover:bg-purple-900/30'
            }`}
          >
            <span className="text-lg">{feature.icon}</span>
            <span className={`text-sm font-medium ${themeStyles.text} opacity-80`}>
              {feature.text}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const containerClasses = `w-full border-2 rounded-xl overflow-hidden ${themeStyles.container}`;

  if (!shouldLoadChat) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={containerClasses}
        style={{ height: '600px' }}
      >
        <div className="flex flex-col h-full relative">
          <div className={`p-6 border-b backdrop-blur-sm ${
            currentTheme === 'minimal'
              ? 'border-gray-200 bg-white/50'
              : currentTheme === 'neon'
                ? 'border-cyan-800/50 bg-cyan-900/10'
                : currentTheme === 'corporate'
                  ? 'border-blue-200/50 bg-blue-50/50'
                  : 'border-purple-700/50 bg-purple-900/10'
          }`}>
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="text-3xl"
              >
                🤖
              </motion.div>
              <div>
                <motion.h3
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className={`font-bold text-xl ${themeStyles.text}`}
                >
                  Career Chatbot Assistant
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 0.8, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className={`text-sm ${themeStyles.text}`}
                >
                  Your personal AI career representative
                </motion.p>
              </div>
            </div>
          </div>
          {renderWelcome()}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <motion.button
              onClick={() => setShouldLoadChat(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 shadow-xl ${
                currentTheme === 'neon'
                  ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 hover:from-cyan-400 hover:to-blue-500'
                  : currentTheme === 'minimal'
                    ? 'bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 hover:from-gray-600 hover:to-gray-800'
                    : currentTheme === 'corporate'
                      ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-500 hover:to-blue-700'
                      : 'bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 hover:from-purple-500 hover:to-blue-500'
              }`}
            >
              <span className="text-xl">💬</span>
              <span>Start Chatting</span>
            </motion.button>
          </div>
        </div>
    </motion.div>
  );
}

ChatMessage.propTypes = {
  message: PropTypes.shape({
    role: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  currentTheme: PropTypes.string.isRequired,
};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={containerClasses}
      style={{ height: '600px' }}
    >
      <div className="flex flex-col h-full">
        <div className={`p-4 border-b backdrop-blur-sm flex items-center justify-between ${
          currentTheme === 'minimal'
            ? 'border-gray-200 bg-white/50'
            : currentTheme === 'neon'
              ? 'border-cyan-800/50 bg-cyan-900/10'
              : currentTheme === 'corporate'
                ? 'border-blue-200/50 bg-blue-50/50'
                : 'border-purple-700/50 bg-purple-900/10'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-base ${
              currentTheme === 'neon'
                ? 'bg-cyan-500/20'
                : currentTheme === 'minimal'
                  ? 'bg-gray-200'
                  : currentTheme === 'corporate'
                    ? 'bg-blue-100'
                    : 'bg-purple-500/20'
            }`}>
              🤖
            </div>
            <div>
              <h3 className={`text-sm font-semibold ${themeStyles.text}`}>
                AI Career Assistant
              </h3>
              <p className={`text-xs opacity-60 ${themeStyles.text}`}>
                {isLoading ? 'Thinking...' : 'Online'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {messages.length > 0 && (
              <motion.button
                onClick={clearMessages}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                  currentTheme === 'neon'
                    ? 'bg-cyan-600 text-white hover:bg-cyan-500'
                    : currentTheme === 'minimal'
                      ? 'bg-gray-600 text-white hover:bg-gray-500'
                      : currentTheme === 'corporate'
                        ? 'bg-blue-600 text-white hover:bg-blue-500'
                        : 'bg-purple-600 text-white hover:bg-purple-500'
                }`}
              >
                Clear
              </motion.button>
            )}
          </div>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className={`mx-4 mt-2 text-center p-3 rounded-lg text-sm ${
              currentTheme === 'minimal'
                ? 'bg-red-50 text-red-600 border border-red-200'
                : 'bg-red-900/20 text-red-400 border border-red-800/30'
            }`}
          >
            {error}
          </motion.div>
        )}

        <div
          ref={chatContainerRef}
          className={`flex-1 overflow-y-auto p-4 space-y-4 ${error ? 'pt-2' : ''}`}
        >
          {messages.length === 0 && !isLoading && (
            <div className="flex flex-col items-center justify-center h-full text-center opacity-60">
              <div className="text-4xl mb-3">💬</div>
              <p className={`text-sm ${themeStyles.text}`}>
                Ask me anything about Hajun Kim&apos;s career!
              </p>
              <p className={`text-xs mt-1 ${themeStyles.text} opacity-60`}>
                Try: &quot;What projects have you worked on?&quot;
              </p>
            </div>
          )}

          <AnimatePresence>
            {messages.map((msg, i) => (
              <ChatMessage
                key={i}
                message={msg}
                themeStyles={themeStyles}
                currentTheme={currentTheme}
              />
            ))}
          </AnimatePresence>

          {isLoading && (
            <TypingIndicator currentTheme={currentTheme} />
          )}

          <div ref={messagesEndRef} />
        </div>

        <form
          onSubmit={handleSubmit}
          className={`p-4 border-t ${
            currentTheme === 'minimal'
              ? 'border-gray-200 bg-white/50'
              : currentTheme === 'neon'
                ? 'border-cyan-800/50 bg-cyan-900/10'
                : currentTheme === 'corporate'
                  ? 'border-blue-200/50 bg-blue-50/50'
                  : 'border-purple-700/50 bg-purple-900/10'
          }`}
        >
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              disabled={isLoading}
              className={`flex-1 px-4 py-2.5 rounded-xl text-sm outline-none transition-colors ${
                currentTheme === 'neon'
                  ? 'bg-cyan-900/20 border border-cyan-800/30 text-cyan-100 placeholder-cyan-500/50 focus:border-cyan-500/50'
                  : currentTheme === 'minimal'
                    ? 'bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:border-gray-400'
                    : currentTheme === 'corporate'
                      ? 'bg-white border border-blue-200 text-blue-900 placeholder-blue-400/50 focus:border-blue-400'
                      : 'bg-neutral-800 border border-neutral-700 text-neutral-200 placeholder-neutral-500 focus:border-purple-500/50'
              } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            />
            <motion.button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className={`px-4 py-2.5 rounded-xl font-medium text-white transition-all duration-200 ${
                isLoading || !inputValue.trim()
                  ? 'cursor-not-allowed'
                  : currentTheme === 'neon'
                    ? 'hover:from-cyan-400 hover:to-blue-400'
                    : currentTheme === 'minimal'
                      ? 'hover:bg-gray-700'
                      : currentTheme === 'corporate'
                        ? 'hover:bg-blue-500'
                        : 'hover:from-purple-500 hover:to-blue-500'
              } ${
                isLoading || !inputValue.trim()
                  ? 'bg-gray-400'
                  : currentTheme === 'neon'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500'
                    : currentTheme === 'minimal'
                      ? 'bg-gray-800'
                      : currentTheme === 'corporate'
                        ? 'bg-blue-600'
                        : 'bg-gradient-to-r from-purple-600 to-blue-600'
              }`}
            >
              Send
            </motion.button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default CareerChatbot;
