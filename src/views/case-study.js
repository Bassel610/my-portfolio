import { Box } from '@mui/material';
import { Header, Meta, Section } from '@/components/case-study';
import { CASE_STUDY } from '@/constants/case-study';

export default function CaseStudy() {
  return (
    <Box id="case-study" sx={{ minHeight: '100vh' }}>
      <Box
        sx={{
          maxWidth: { xs: '100%', md: 980 },
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 4 },
          pt: { xs: 12, md: 14 },
          pb: { xs: 4, md: 8 },
        }}
      >
        <Header
          eyebrow={CASE_STUDY.eyebrow}
          title={CASE_STUDY.title}
          subtitle={CASE_STUDY.subtitle}
          liveUrl={CASE_STUDY.liveUrl}
        />
        <Meta items={CASE_STUDY.meta} />
        {CASE_STUDY.sections.map((s) => (
          <Section
            key={s.kind}
            kind={s.kind}
            heading={s.heading}
            body={s.body}
          />
        ))}
      </Box>
    </Box>
  );
}
