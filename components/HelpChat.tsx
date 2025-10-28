 'use client'
 import Header from "@/components/Header"
import {
    Conversation,
    ConversationContent,
    ConversationEmptyState,
    ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import { Message, MessageContent } from '@/components/ai-elements/message';
import {
    PromptInput,
    PromptInputTextarea,
    PromptInputSubmit,
    PromptInputMessage,
} from '@/components/ai-elements/prompt-input';
import { MessageSquare } from 'lucide-react';
import { Response } from '@/components/ai-elements/response';
import { DefaultChatTransport } from 'ai';

import { useChat } from '@ai-sdk/react';
import { Suspense, useState } from 'react';

 export default function HelpChat() {
    const [text, setText] = useState<string>('');

    const { messages, sendMessage, status } = useChat({
        transport: new DefaultChatTransport({
            api: '/api/chat',
        }),
    })

    const handleSubmit = (message: PromptInputMessage) => {
        console.log('handleSubmit', message);
        // const [useWebSearch, setUseWebSearch] = useState<boolean>(false);
        sendMessage(
            {
                text: message.text ?? '',
            },
            {
                body: {
                },
            },
        );
        setText('');
    };
    return (
        <div className="max-w-4xl mx-auto p-6 relative size-full rounded-lg border h-[600px]">
                <div className="flex flex-col h-full">
                    <Conversation>
                        <ConversationContent>
                            {messages.length === 0 ? (
                                <ConversationEmptyState
                                    icon={<MessageSquare className="size-12" />}
                                    title="Start a conversation"
                                    description="Type a message below to begin chatting"
                                />
                            ) : (
                                messages.map((message) => (
                                    <Message from={message.role} key={message.id}>
                                        <MessageContent>
                                            {message.parts.map((part, i) => {
                                                switch (part.type) {
                                                    case 'text': // we don't use any reasoning or tool calls in this example
                                                        return (
                                                            <Response key={`${message.id}-${i}`}>
                                                                {part.text}
                                                            </Response>
                                                        );
                                                    default:
                                                        return null;
                                                }
                                            })}
                                        </MessageContent>
                                    </Message>
                                ))
                            )}
                        </ConversationContent>
                        <ConversationScrollButton />
                    </Conversation>
                    <PromptInput
                        onSubmit={handleSubmit}
                        className="mt-4 w-full max-w-2xl mx-auto relative"
                    >
                        <PromptInputTextarea
                            value={text}
                            placeholder="Say something..."
                            onChange={(e) => setText(e.currentTarget.value)}
                            className="pr-12"
                        />
                        <PromptInputSubmit
                            status={status === 'streaming' ? 'streaming' : 'ready'}
                            disabled={!text.trim()}
                            className="absolute bottom-1 right-1"
                        />
                    </PromptInput>
                </div>
            </div>
    )
 }