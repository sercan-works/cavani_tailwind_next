import fallbackSiteData from "../data/site.json";
import { prisma } from "./prisma";

const composeSiteData = ({ hero, about, music, portfolio, timeline }) => ({
  hero: hero
    ? { prefix: hero.prefix, rotatingStrings: hero.rotatingStrings || [] }
    : fallbackSiteData.hero,
  about: about
    ? { title: about.title, bio: about.bio || [], motto: about.motto || "" }
    : fallbackSiteData.about,
  music: (music || []).map((item) => ({
    id: item.id,
    title: item.title,
    youtubeUrl: item.youtubeUrl,
  })),
  portfolio: (portfolio || []).map((item) => ({
    id: item.id,
    title: item.title,
    platform: item.platform,
    url: item.url,
    cover: item.cover || "",
  })),
  timeline: (timeline || []).map((item) => ({
    id: item.id,
    title: item.title,
    releaseDate: item.releaseDate,
    platform: item.platform,
    url: item.url,
    cover: item.cover || "",
    description: item.description || "",
  })),
});

export const seedSiteDataIfEmpty = async () => {
  const heroCount = await prisma.hero.count();
  if (heroCount > 0) return;
  await updateSiteData(fallbackSiteData);
};

export const getSiteData = async () => {
  await seedSiteDataIfEmpty();

  const [hero, about, music, portfolio, timeline] = await Promise.all([
    prisma.hero.findUnique({ where: { id: 1 } }),
    prisma.about.findUnique({ where: { id: 1 } }),
    prisma.music.findMany({ orderBy: { sortOrder: "asc" } }),
    prisma.portfolioItem.findMany({ orderBy: { sortOrder: "asc" } }),
    prisma.timelineItem.findMany({ orderBy: { sortOrder: "asc" } }),
  ]);

  return composeSiteData({ hero, about, music, portfolio, timeline });
};

export const updateSiteData = async (payload) => {
  const nextHero = payload?.hero || {};
  const nextAbout = payload?.about || {};
  const nextMusic = Array.isArray(payload?.music) ? payload.music : [];
  const nextPortfolio = Array.isArray(payload?.portfolio) ? payload.portfolio : [];
  const nextTimeline = Array.isArray(payload?.timeline) ? payload.timeline : [];

  await prisma.$transaction(async (tx) => {
    await tx.hero.upsert({
      where: { id: 1 },
      update: {
        prefix: nextHero.prefix || "",
        rotatingStrings: nextHero.rotatingStrings || [],
      },
      create: {
        id: 1,
        prefix: nextHero.prefix || "",
        rotatingStrings: nextHero.rotatingStrings || [],
      },
    });

    await tx.about.upsert({
      where: { id: 1 },
      update: {
        title: nextAbout.title || "",
        bio: nextAbout.bio || [],
        motto: nextAbout.motto || "",
      },
      create: {
        id: 1,
        title: nextAbout.title || "",
        bio: nextAbout.bio || [],
        motto: nextAbout.motto || "",
      },
    });

    await tx.music.deleteMany();
    if (nextMusic.length > 0) {
      await tx.music.createMany({
        data: nextMusic.map((item, idx) => ({
          id: Number(item.id || idx + 1),
          title: item.title || "",
          youtubeUrl: item.youtubeUrl || "",
          sortOrder: idx + 1,
        })),
      });
    }

    await tx.portfolioItem.deleteMany();
    if (nextPortfolio.length > 0) {
      await tx.portfolioItem.createMany({
        data: nextPortfolio.map((item, idx) => ({
          id: Number(item.id || idx + 1),
          title: item.title || "",
          platform: item.platform || "",
          url: item.url || "",
          cover: item.cover || "",
          sortOrder: idx + 1,
        })),
      });
    }

    await tx.timelineItem.deleteMany();
    if (nextTimeline.length > 0) {
      await tx.timelineItem.createMany({
        data: nextTimeline.map((item, idx) => ({
          id: Number(item.id || idx + 1),
          title: item.title || "",
          releaseDate: item.releaseDate || "",
          platform: item.platform || "",
          url: item.url || "",
          cover: item.cover || "",
          description: item.description || "",
          sortOrder: idx + 1,
        })),
      });
    }
  });

  return getSiteData();
};
