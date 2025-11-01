import { 
  type User, 
  type InsertUser,
  type NewsArticle,
  type InsertNewsArticle,
  type PortfolioProject,
  type InsertPortfolioProject,
  type ContactSubmission,
  type InsertContactSubmission
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllNewsArticles(): Promise<NewsArticle[]>;
  getNewsArticle(id: string): Promise<NewsArticle | undefined>;
  createNewsArticle(article: InsertNewsArticle): Promise<NewsArticle>;
  updateNewsArticle(id: string, article: Partial<InsertNewsArticle>): Promise<NewsArticle | undefined>;
  deleteNewsArticle(id: string): Promise<boolean>;
  
  getAllPortfolioProjects(): Promise<PortfolioProject[]>;
  getPortfolioProject(id: string): Promise<PortfolioProject | undefined>;
  createPortfolioProject(project: InsertPortfolioProject): Promise<PortfolioProject>;
  updatePortfolioProject(id: string, project: Partial<InsertPortfolioProject>): Promise<PortfolioProject | undefined>;
  deletePortfolioProject(id: string): Promise<boolean>;
  
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private newsArticles: Map<string, NewsArticle>;
  private portfolioProjects: Map<string, PortfolioProject>;
  private contactSubmissions: Map<string, ContactSubmission>;

  constructor() {
    this.users = new Map();
    this.newsArticles = new Map();
    this.portfolioProjects = new Map();
    this.contactSubmissions = new Map();
    
    this.seedData();
  }

  private seedData() {
    const article1: NewsArticle = {
      id: randomUUID(),
      title: 'E&R Webservice Launches Next-Generation Cloud Infrastructure',
      excerpt: 'We are excited to announce the launch of our cutting-edge cloud hosting platform, featuring enhanced security, improved performance, and advanced scalability options for our clients.',
      content: 'We are excited to announce the launch of our cutting-edge cloud hosting platform, featuring enhanced security, improved performance, and advanced scalability options for our clients. This new infrastructure represents a significant investment in our commitment to providing the best possible service.',
      author: 'Marketing Team',
      image: '/assets/news1.jpg',
      createdAt: new Date('2025-10-07'),
      updatedAt: new Date('2025-10-07'),
    };
    
    const article2: NewsArticle = {
      id: randomUUID(),
      title: 'Strategic Partnership with Leading Tech Companies Announced',
      excerpt: 'E&R Webservice has formed strategic partnerships with industry-leading technology providers to enhance our service offerings and deliver even more value to our clients.',
      content: 'E&R Webservice has formed strategic partnerships with industry-leading technology providers to enhance our service offerings and deliver even more value to our clients. These partnerships will enable us to provide cutting-edge solutions.',
      author: 'PR Department',
      image: '/assets/news2.jpg',
      createdAt: new Date('2025-10-05'),
      updatedAt: new Date('2025-10-05'),
    };

    this.newsArticles.set(article1.id, article1);
    this.newsArticles.set(article2.id, article2);

    const project1: PortfolioProject = {
      id: randomUUID(),
      title: 'Global E-Commerce Platform',
      category: 'Web Development',
      description: 'Full-stack e-commerce solution handling millions of transactions annually',
      image: '/assets/project1.jpg',
      link: 'https://example.com',
      createdAt: new Date(),
    };

    this.portfolioProjects.set(project1.id, project1);
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllNewsArticles(): Promise<NewsArticle[]> {
    return Array.from(this.newsArticles.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getNewsArticle(id: string): Promise<NewsArticle | undefined> {
    return this.newsArticles.get(id);
  }

  async createNewsArticle(article: InsertNewsArticle): Promise<NewsArticle> {
    const id = randomUUID();
    const now = new Date();
    const newsArticle: NewsArticle = { 
      ...article,
      image: article.image ?? null,
      id,
      createdAt: now,
      updatedAt: now
    };
    this.newsArticles.set(id, newsArticle);
    return newsArticle;
  }

  async updateNewsArticle(id: string, article: Partial<InsertNewsArticle>): Promise<NewsArticle | undefined> {
    const existing = this.newsArticles.get(id);
    if (!existing) return undefined;
    
    const updated: NewsArticle = {
      ...existing,
      ...article,
      updatedAt: new Date(),
    };
    this.newsArticles.set(id, updated);
    return updated;
  }

  async deleteNewsArticle(id: string): Promise<boolean> {
    return this.newsArticles.delete(id);
  }

  async getAllPortfolioProjects(): Promise<PortfolioProject[]> {
    return Array.from(this.portfolioProjects.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getPortfolioProject(id: string): Promise<PortfolioProject | undefined> {
    return this.portfolioProjects.get(id);
  }

  async createPortfolioProject(project: InsertPortfolioProject): Promise<PortfolioProject> {
    const id = randomUUID();
    const portfolioProject: PortfolioProject = {
      ...project,
      link: project.link ?? null,
      id,
      createdAt: new Date(),
    };
    this.portfolioProjects.set(id, portfolioProject);
    return portfolioProject;
  }

  async updatePortfolioProject(id: string, project: Partial<InsertPortfolioProject>): Promise<PortfolioProject | undefined> {
    const existing = this.portfolioProjects.get(id);
    if (!existing) return undefined;
    
    const updated: PortfolioProject = {
      ...existing,
      ...project,
    };
    this.portfolioProjects.set(id, updated);
    return updated;
  }

  async deletePortfolioProject(id: string): Promise<boolean> {
    return this.portfolioProjects.delete(id);
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const contactSubmission: ContactSubmission = {
      ...submission,
      id,
      createdAt: new Date(),
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

import { db } from './db';
import * as schema from '@shared/schema';
import { eq, desc } from 'drizzle-orm';

export class DbStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(schema.users).where(eq(schema.users.id, id)).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(schema.users).where(eq(schema.users.username, username)).limit(1);
    return result[0];
  }

  async createUser(user: InsertUser): Promise<User> {
    const result = await db.insert(schema.users).values(user).returning();
    return result[0];
  }

  async getAllNewsArticles(): Promise<NewsArticle[]> {
    return await db.select().from(schema.newsArticles).orderBy(desc(schema.newsArticles.createdAt));
  }

  async getNewsArticle(id: string): Promise<NewsArticle | undefined> {
    const result = await db.select().from(schema.newsArticles).where(eq(schema.newsArticles.id, id)).limit(1);
    return result[0];
  }

  async createNewsArticle(article: InsertNewsArticle): Promise<NewsArticle> {
    const result = await db.insert(schema.newsArticles).values(article).returning();
    return result[0];
  }

  async updateNewsArticle(id: string, article: Partial<InsertNewsArticle>): Promise<NewsArticle | undefined> {
    const result = await db.update(schema.newsArticles)
      .set({ ...article, updatedAt: new Date() })
      .where(eq(schema.newsArticles.id, id))
      .returning();
    return result[0];
  }

  async deleteNewsArticle(id: string): Promise<boolean> {
    const result = await db.delete(schema.newsArticles).where(eq(schema.newsArticles.id, id)).returning();
    return result.length > 0;
  }

  async getAllPortfolioProjects(): Promise<PortfolioProject[]> {
    return await db.select().from(schema.portfolioProjects).orderBy(desc(schema.portfolioProjects.createdAt));
  }

  async getPortfolioProject(id: string): Promise<PortfolioProject | undefined> {
    const result = await db.select().from(schema.portfolioProjects).where(eq(schema.portfolioProjects.id, id)).limit(1);
    return result[0];
  }

  async createPortfolioProject(project: InsertPortfolioProject): Promise<PortfolioProject> {
    const result = await db.insert(schema.portfolioProjects).values(project).returning();
    return result[0];
  }

  async updatePortfolioProject(id: string, project: Partial<InsertPortfolioProject>): Promise<PortfolioProject | undefined> {
    const result = await db.update(schema.portfolioProjects)
      .set(project)
      .where(eq(schema.portfolioProjects.id, id))
      .returning();
    return result[0];
  }

  async deletePortfolioProject(id: string): Promise<boolean> {
    const result = await db.delete(schema.portfolioProjects).where(eq(schema.portfolioProjects.id, id)).returning();
    return result.length > 0;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const result = await db.insert(schema.contactSubmissions).values(submission).returning();
    return result[0];
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(schema.contactSubmissions).orderBy(desc(schema.contactSubmissions.createdAt));
  }
}

export const storage = new DbStorage();
