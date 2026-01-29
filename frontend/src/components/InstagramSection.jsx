import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Heart, MessageCircle, Play, Instagram } from 'lucide-react';

const posts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1765991736112-947360518547?crop=entropy&cs=srgb&fm=jpg&q=85',
    likes: '2,847',
    comments: '156',
    isReel: true,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1765991736292-183af847fbbf?crop=entropy&cs=srgb&fm=jpg&q=85',
    likes: '3,124',
    comments: '89',
    isReel: false,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1720617550153-7242f81ccbd6?crop=entropy&cs=srgb&fm=jpg&q=85',
    likes: '4,562',
    comments: '203',
    isReel: true,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1611550287705-7ff8b459c8eb?crop=entropy&cs=srgb&fm=jpg&q=85',
    likes: '1,893',
    comments: '67',
    isReel: false,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1630978781617-816e79eaffeb?crop=entropy&cs=srgb&fm=jpg&q=85',
    likes: '5,214',
    comments: '312',
    isReel: true,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1763922739054-2b0cdf39c8c5?crop=entropy&cs=srgb&fm=jpg&q=85',
    likes: '2,156',
    comments: '98',
    isReel: false,
  },
];

const InstagramPost = ({ post, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative aspect-square overflow-hidden cursor-pointer group"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`instagram-post-${post.id}`}
    >
      <img 
        src={post.image}
        alt={`Instagram post ${post.id}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Reel indicator */}
      {post.isReel && (
        <div className="absolute top-3 right-3 z-10">
          <Play className="w-5 h-5 text-white fill-white" />
        </div>
      )}

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-black/60 flex items-center justify-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-2 text-white">
          <Heart className="w-6 h-6 fill-white" />
          <span className="font-semibold">{post.likes}</span>
        </div>
        <div className="flex items-center gap-2 text-white">
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="font-semibold">{post.comments}</span>
        </div>
      </motion.div>

      {/* Play animation on hover for reels */}
      {post.isReel && isHovered && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Play className="w-8 h-8 text-white fill-white ml-1" />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

const InstagramSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      data-testid="instagram-section"
      className="py-24 md:py-32 bg-[#F9F8F6]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-script text-[#D4AF37] text-2xl mb-4">Follow Our Journey</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#4A4036]">
            @keepsakestudioandco
          </h2>
        </motion.div>

        {/* Instagram profile header mockup */}
        <motion.div
          className="flex items-center justify-center gap-8 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center">
            <p className="font-heading text-2xl text-[#4A4036]">248</p>
            <p className="text-[#8C8070] text-sm">Posts</p>
          </div>
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#E6C2BF] to-[#D4AF37] p-0.5">
            <div className="w-full h-full rounded-full bg-[#F9F8F6] flex items-center justify-center">
              <Instagram className="w-8 h-8 text-[#4A4036]" />
            </div>
          </div>
          <div className="text-center">
            <p className="font-heading text-2xl text-[#4A4036]">15.2K</p>
            <p className="text-[#8C8070] text-sm">Followers</p>
          </div>
        </motion.div>

        {/* Instagram grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 rounded-lg overflow-hidden">
          {posts.map((post, index) => (
            <InstagramPost key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="https://instagram.com/Keepsakestudioandco"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#4A4036] to-[#2A2520] text-white rounded-full font-medium hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            data-testid="follow-instagram-btn"
          >
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
