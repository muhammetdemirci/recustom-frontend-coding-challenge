import React from 'react';
import Image from 'next/image'
import { SuccessBigSvg } from './assets/successBigSvg';
import { SuccessSmallSvg } from './assets/successSmallSvg';
import { WarningBigSvg } from './assets/warningBigSvg';
import { WarningSmallSvg } from './assets/warningSmallSvg';
import { COLORS } from '../../theme/colors';
import { CloseSvg } from './assets/closeSvg';


interface ToastProps {
  state: 'success' | 'warning' | 'custom';
  showAction: boolean;
  title?: string;
  text: string;
  highlightText?: string;
  buttonText?: string;
  width?: 640 | 375;
  avatarUrl?: string;
}

export const Toast = ({
  state,
  showAction,
  title,
  text,
  highlightText,
  buttonText,
  width = 640,
  avatarUrl,
  ...props
}: ToastProps) => {

  const getHighlightedText = (text: string, highlight: string) => {
    // Split on highlight term and include term into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return <span> {parts.map((part, i) =>
      <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? { fontWeight: 'bold' } : {}}>
        {part}
      </span>)
    } </span>;
  }

  const getStyleContainer = (): React.CSSProperties => {
    const defaultStyles: React.CSSProperties = {
      width,
      padding: 16,
      backgroundColor: COLORS.white,
      borderWidth: 1,
      border: 'solid',
      borderRadius: 6
    }
    switch (state) {
      case 'success':
        return { ...defaultStyles, color: COLORS.success600, borderColor: COLORS.success300 }
      case 'warning':
        return { ...defaultStyles, color: COLORS.danger500, borderColor: COLORS.danger300 }
      case 'custom':
        return { ...defaultStyles, borderColor: COLORS.white, display: 'flex', flexDirection: 'row', }
      default:
        return defaultStyles
    }
  }

  const getStyleButton = (): React.CSSProperties => {
    const defaultStyles: React.CSSProperties = {
      border: 'solid',
      borderWidth: 1,
      borderColor: COLORS.black,
      borderRadius: 100,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 4,
      paddingBottom: 4,
      marginTop: 12,
      width: 'fit-content',
      cursor: 'pointer',
    }
    switch (state) {
      case 'success':
        return { ...defaultStyles, backgroundColor: COLORS.success600, color: COLORS.white }
      case 'warning':
        return { ...defaultStyles, backgroundColor: COLORS.danger500, color: COLORS.white }
      case 'custom':
        return { ...defaultStyles, backgroundColor: COLORS.sun500, color: COLORS.midnight500 }
      default:
        return defaultStyles
    }
  }

  return (
    <div style={getStyleContainer()}>
      <div style={styles.avatarWrapper} >
        {
          state === 'custom' && avatarUrl && <Image
            src={avatarUrl}
            width={32}
            height={32}
            alt=''
          />
        }
      </div>
      <div style={styles.content} >
        {
          state == 'custom' && (<div style={styles.titleWrapper} >
            <div style={styles.title} >{title}</div>
            <CloseSvg color={COLORS.gray400} />
          </div>)
        }
        {
          showAction && state != 'custom' && (<div style={styles.headWrapper}>
            <div style={styles.head} >
              {
                state == 'success' && <><div style={styles.headIcon} ><SuccessSmallSvg /></div> Success</>
              }
              {
                state == 'warning' && <><div style={styles.headIcon} ><WarningSmallSvg /></div> Attention</>
              }
            </div>
            <CloseSvg color={state == 'success' ? COLORS.success600 : (state == 'warning' ? COLORS.danger500 : COLORS.gray400)} />
          </div>)
        }
        <div style={styles.bodyWrapper} >
          {
            !showAction && state == 'success' && (<div style={{ marginRight: 10 }}><SuccessBigSvg /></div>)
          }
          {
            !showAction && state == 'warning' && (<div style={{ marginRight: 10 }}><WarningBigSvg /></div>)
          }
          <div style={styles.body} >
            {getHighlightedText(text, highlightText || '')}
          </div>
          <div>
            {
              !showAction && state != 'custom' && <CloseSvg color={state == 'success' ? COLORS.success600 : (state == 'warning' ? COLORS.danger500 : COLORS.gray400)} />
            }
          </div>
        </div>
        {
          showAction && buttonText && <div style={getStyleButton()} >{buttonText}</div>
        }
      </div>
    </div>);
};

const styles: Record<string, React.CSSProperties> = {
  avatarWrapper: { marginRight: 12 },
  content: { display: 'flex', flex: 1, flexDirection: 'column' },
  titleWrapper: { display: 'flex', flexDirection: 'row' },
  title: { flex: 1, color: COLORS.gray900, fontWeight: '800' },
  headWrapper: { display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 6, },
  head: { display: 'flex', flex: 1, fontWeight: '800' },
  headIcon: { marginRight: 8 },
  bodyWrapper: { display: 'flex', flexDirection: 'row', alignItems: 'center' },
  body: { flex: 1 },
}